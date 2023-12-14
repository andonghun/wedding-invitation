// @ts-nocheck

import { useEffect, useRef } from "react";

export const useSound = (soundUrl: string) => {
  const soundRef = useRef(new Audio(soundUrl));

  soundRef.current.volume = 0.1;

  const playSound = () => {
    soundRef.current.play();
  };

  const loadSound = () => {
    soundRef.current.load();
  };

  useEffect(() => {
    loadSound();
  }, [soundUrl]);

  return { playSound, loadSound };
};
