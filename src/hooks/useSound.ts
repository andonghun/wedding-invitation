import { useEffect, useRef, useState } from "react";

export const useSound = (soundUrl: string) => {
  const [sound, setSound] = useState<any>(null);

  useEffect(() => {
    // 클라이언트 사이드에서만 Audio 객체 생성
    if (typeof window !== "undefined") {
      const audio = new Audio(soundUrl);
      audio.volume = 0.1;
      setSound(audio);
    }
  }, [soundUrl]);

  const playSound = () => {
    if (sound) {
      sound.play();
    }
  };

  const loadSound = () => {
    if (sound) {
      sound.load();
    }
  };

  return { playSound, loadSound };
};
