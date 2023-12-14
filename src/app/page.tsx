// @ts-nocheck
"use client";

import { useSound } from "@/hooks/useSound";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const items = ["👰‍♀️", "🏝️", "🤵🏻‍♂️", "1️⃣", "4️⃣"];
const imageMap = {
  "🤵🏻‍♂️": "slotImages/face.png",
};

const LandingPage = () => {
  const [coins, setCoins] = useState(10);

  const router = useRouter();

  const { playSound: playBegin } = useSound("sounds/reelsBegin.mp3");
  const { playSound: playEnd } = useSound("sounds/reelsEnd.mp3");
  const { playSound: playWin } = useSound("sounds/winner.mp3");

  const [doors, setDoors] = useState(
    [...Array(3)].map(() => ({
      boxes: ["❓"],
      spinning: false,
      transitionDuration: 2, // 초 단위
    }))
  );

  useEffect(() => {
    reset(true);
  }, []);

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

  const reset = (firstInit = true) => {
    const newDoors: any = doors.map(() => {
      const boxesClone = ["❓"];
      if (!firstInit) {
        const pool = [...items, ...items]; // 예시: items를 두 배로 늘림
        boxesClone.push(...shuffle(pool));
      }
      return { boxes: boxesClone, spinning: false };
    });
    setDoors(newDoors);
    setCoins(10);
  };

  const spin = () => {
    if (coins <= 0) {
      toast.error("코인이 부족합니다!");
      return;
    }

    // 모든 도어가 회전을 멈춘 경우에만 시작
    if (!doors.every((door) => !door.spinning)) {
      return;
    }

    setCoins((prevCoins) => prevCoins - 1); // 코인 사용
    playBegin();

    // 회전 시작
    const spinningDoors = doors.map(() => ({
      boxes: shuffle([...items, ...items, ...items]),
      spinning: true,
      transitionDuration: 2,
    }));
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
    }, 2000);
  };

  const checkResult = (doors: any) => {
    // 결과 확인 로직
    if (!doors.every((door: any) => !door.spinning)) {
      return;
    }

    if (doors[0].boxes[0] === "❓") return;

    if (
      doors[0].boxes[0] === doors[1].boxes[0] &&
      doors[1].boxes[0] === doors[2].boxes[0]
    ) {
      if (doors[0].boxes[0] === "🤵🏻‍♂️") {
        toast.info("신랑은 조재연입니다!", {
          onClose: () => {
            router.push("/main");
          },
        });
        playWin();
      }
      if (doors[0].boxes[0] === "👰‍♀️") {
        toast.info("신부는 남선혜입니다!", {
          onClose: () => {
            router.push("/main");
          },
        });
        playWin();
      }
      if (doors[0].boxes[0] === "🏝️") {
        toast.info("장소는 플로팅 아일랜드입니다!", {
          onClose: () => {
            router.push("/main");
          },
        });
        playWin();
      }
    }
    if (
      doors[0].boxes[0] === "1️⃣" &&
      doors[1].boxes[0] === "1️⃣" &&
      doors[2].boxes[0] === "4️⃣"
    ) {
      toast.info("결혼식은 1월 14일입니다!", {
        onClose: () => {
          router.push("/main");
        },
      });
      playWin();
    }
  };

  useEffect(() => {
    if (coins === 0) {
      toast.error("아쉽다! 코인을 다 써버렸어요!");
    }
  }, [coins]);

  return (
    <div id="app" className="flex justify-center gap-8">
      <h1 className="mt-10 text-[32px]">💖결혼 슬롯 머신💍</h1>
      <div className="flex">
        {doors.map((door, index) => (
          <div
            key={index}
            className={`door bg-gray-200 w-24 h-24 overflow-hidden rounded-md m-1 ${
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
                  {imageMap[box] ? (
                    <img src={imageMap[box]} alt={box} width={75} />
                  ) : (
                    box
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button
          className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          onClick={spin}
        >
          클릭해서! 돌려주세요!
        </button>
        <div className="text-m">남은 코인: {coins}</div>
        <button onClick={() => reset(true)} className="text-m">
          다시 도전하기!
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
