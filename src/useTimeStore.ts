import { create } from "zustand";

type Store = {
  weddingTime: null | string[];
  setWeddingTime: () => void;
};

export const useTimeStore = create<Store>()((set) => ({
  weddingTime: null,
  setWeddingTime: () =>
    set({
      weddingTime: [
        "2",
        "0",
        "2",
        "4",
        "0",
        "1",
        "1",
        "4",
        "1",
        "5",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
        "0",
      ],
    }),
}));
