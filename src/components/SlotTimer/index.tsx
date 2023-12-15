// @ts-nocheck

import { useTimeStore } from "@/useTimeStore";
import React, { useEffect, useState } from "react";

const SlotTimer = () => {
  const { weddingTime } = useTimeStore();

  const [currentTime, setCurrentTime] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const formattedTime =
        now.getFullYear().toString().padStart(4, "0") +
        (now.getMonth() + 1).toString().padStart(2, "0") +
        now.getDate().toString().padStart(2, "0") +
        now.getHours().toString().padStart(2, "0") +
        now.getMinutes().toString().padStart(2, "0") +
        now.getSeconds().toString().padStart(2, "0") +
        now.getMilliseconds().toString().padStart(3, "0");
      setCurrentTime(formattedTime.split(""));
    }, 1);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`${
        weddingTime && "animate-bounce"
      } w-[384px] bg-black border-[#FBFE56] border-[5px] text-[#FBFE56] text-[36px] font-normal font-['Impact'] p-2 flex mb-10`}
    >
      {weddingTime
        ? weddingTime.map((digit, index) => (
            <span key={index} className="w-8 flex justify-center">
              {digit}
            </span>
          ))
        : currentTime.map((digit, index) => (
            <span key={index} className="w-8 flex justify-center">
              {digit}
            </span>
          ))}
    </div>
  );
};

export default SlotTimer;
