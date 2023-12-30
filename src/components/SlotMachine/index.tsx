// @ts-nocheck
"use client";

import React, { useState } from "react";
import styles from "./SlotMachine.module.css";
import Image from "next/image";
import SpinButton from "public/slotImages/SPIN.png";
import { useSound } from "@/hooks/useSound";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useTimeStore } from "@/useTimeStore";

const WinResult = [
  {
    boxes: new Array(15).fill("w"),
    spinning: true,
    transitionDuration: 2,
  },
  {
    boxes: new Array(15).fill("i"),
    spinning: true,
    transitionDuration: 2,
  },
  {
    boxes: new Array(15).fill("n"),
    spinning: true,
    transitionDuration: 2,
  },
];

const imageMap = {
  w: "slotImages/good1.png",
  i: "slotImages/good2.png",
  n: "slotImages/good3.png",
  "1": "slotImages/1.png",
  "2": "slotImages/2.png",
  "3": "slotImages/3.png",
  "4": "slotImages/4.png",
  "5": "slotImages/5.png",
};

const items = ["1", "2", "3", "4", "5"];

const SlotMachine = () => {
  const { setWeddingTime } = useTimeStore();

  const { playSound: playBegin } = useSound("sounds/reelsBegin.mp3");
  const { playSound: playEnd } = useSound("sounds/reelsEnd.mp3");
  const { playSound: playWin } = useSound("sounds/winner.mp3");

  const [spinCount, setSpinCount] = useState(0);
  const [doors, setDoors] = useState([
    {
      boxes: ["1", "2", "3", "5", "5", "3", "4", "5"],
      spinning: false,
      transitionDuration: 1,
    },
    {
      boxes: ["3", "1", "2", "4", "1", "2", "1", "5"],
      spinning: false,
      transitionDuration: 1,
    },
    {
      boxes: ["5", "2", "3", "4", "1", "2", "3", "4"],
      spinning: false,
      transitionDuration: 1,
    },
  ]);

  const shuffle = (array: any) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // 배열이 남아있는 동안 계속 반복
    while (0 !== currentIndex) {
      // 남아 있는 요소 중에서 하나를 무작위로 선택
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // 현재 요소와 무작위로 선택된 요소를 교환
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const spin = () => {
    // 모든 도어가 회전을 멈춘 경우에만 시작
    if (!doors.every((door) => !door.spinning)) {
      return;
    }

    playBegin();

    // 슬롯 머신 시도 횟수 증가
    setSpinCount((prevCount) => prevCount + 1);

    // 슬롯 머신 횟수 3회 이상인 경우, 70퍼 확률로 당첨
    const isWin = spinCount >= 1 || (spinCount >= 1 && Math.random() < 0.8);

    let spinningDoors: any;

    if (isWin) {
      spinningDoors = WinResult;
    } else {
      // 회전 시작
      spinningDoors = doors.map(() => ({
        boxes: shuffle([...items, ...items, ...items]),
        spinning: true,
        transitionDuration: 1,
      }));
    }

    setDoors(spinningDoors);

    // 2초 후에 회전 종료 상태로 설정
    setTimeout(() => {
      const stoppedDoors = spinningDoors.map((door) => ({
        ...door,
        spinning: false,
      }));
      setDoors(stoppedDoors);

      playEnd();
      checkResult(stoppedDoors);
    }, 1000);
  };

  const checkResult = (doors: any) => {
    // 결과 확인 로직
    if (!doors.every((door: any) => !door.spinning)) {
      return;
    }

    if (doors[0].boxes[0] === "❓") return;

    if (
      doors[0].boxes[0] === "w" &&
      doors[1].boxes[0] === "i" &&
      doors[2].boxes[0] === "n"
    ) {
      playWin();
      toast.info("결혼한다!", {
        position: "bottom-center",
      });

      setWeddingTime();

      setTimeout(() => {
        window.location.href = "https://www.barunsonmcard.com/m/jysh0114";
      }, 2000);
    }
  };

  return (
    <div className="flex w-full flex-col justify-center items-center gap-5">
      <div className="w-full bg-[#FEAE2B] rounded-3xl p-2">
        <div className="w-full h-full bg-[#4E3C47] rounded-3xl flex justify-center items-center py-2 px-4">
          {doors.map((door, index) => (
            <div
              key={index}
              className={`door overflow-hidden rounded-md ${
                door.spinning ? "spinning" : ""
              }`}
            >
              <div
                className="boxes"
                style={{
                  transform: door.spinning ? "translateY(0)" : "",
                  transitionDuration: `${door.transitionDuration}s`,
                }}
              >
                {door.boxes.map((box, boxIndex) => (
                  <div key={boxIndex} className="box">
                    <img src={imageMap[box]} alt={box} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className={`animate-pulse flex justify-center items-center w-[150px] h-[150px] rounded-full ${styles.Container} hover:bg-second active:bg-white active:translate-y-1 flex-col font-bold text-txl`}
        onClick={spin}
      >
        <Image src={SpinButton} width={120} height={120} alt="spin-button" />
        (누르세요)
      </button>
    </div>
  );
};

export default SlotMachine;
