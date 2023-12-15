// @ts-nocheck
"use client";

import SlotMachine from "@/components/SlotMachine";
import SlotTimer from "@/components/SlotTimer";
import { useTimeStore } from "@/useTimeStore";
import React from "react";
import ConfettiExplosion from "react-confetti-explosion";

const LandingPage = () => {
  const { weddingTime } = useTimeStore();

  return (
    <div id="app" className="mt-10 flex justify-center">
      <SlotTimer />
      {weddingTime && <ConfettiExplosion />}
      <SlotMachine />
    </div>
  );
};

export default LandingPage;
