"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const LandingPage = () => {
  const router = useRouter();

  const items = ["👰‍♀️", "🏝️", "🤵🏻‍♂️", "1️⃣", "4️⃣"];
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

  const shuffle = (array) => {
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
    const newDoors = doors.map(() => {
      const boxesClone = ["❓"];
      if (!firstInit) {
        const pool = [...items, ...items]; // 예시: items를 두 배로 늘림
        boxesClone.push(...shuffle(pool));
      }
      return { boxes: boxesClone, spinning: false };
    });
    setDoors(newDoors);
  };

  const spin = () => {
    // 모든 도어가 회전을 멈춘 경우에만 시작
    if (!doors.every((door) => !door.spinning)) {
      return;
    }

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
    }, 2000);
  };

  useEffect(() => {
    // 모든 도어가 회전을 멈춘 경우에만 결과 확인
    if (!doors.every((door) => !door.spinning)) {
      return;
    }

    // 각 door의 transitionDuration을 기반으로 지연 처리
    doors.forEach(async (door, index) => {
      await new Promise((resolve) =>
        setTimeout(resolve, door.transitionDuration * 1000)
      );

      setDoors((prevDoors) =>
        prevDoors.map((prevDoor, prevIndex) => {
          if (prevIndex === index) {
            return { ...prevDoor, spinning: false };
          }
          return prevDoor;
        })
      );
    });

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
      }
      if (doors[0].boxes[0] === "👰‍♀️") {
        toast.info("신부는 남선혜입니다!", {
          onClose: () => {
            router.push("/main");
          },
        });
      }
      if (doors[0].boxes[0] === "🏝️") {
        toast.info("장소는 플로팅 아일랜드입니다!", {
          onClose: () => {
            router.push("/main");
          },
        });
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
    }
  }, [doors]);

  return (
    <div id="app">
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
                  {box}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={spin}>Play</button>
        <button onClick={() => reset(true)}>Reset</button>
      </div>
    </div>
  );
};

export default LandingPage;
