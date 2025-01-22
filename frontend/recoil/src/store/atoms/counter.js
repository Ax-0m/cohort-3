import { atom, selector } from "recoil";

export const counterAtom = atom({
  default: 0,
  key: "counter",
});

export const isEven = selector({
  key: "isEven",
  get: ({ get }) => {
    const currentCount = get(counterAtom);
    const iseven = currentCount % 2 == 0;
    return iseven;
  },
});
