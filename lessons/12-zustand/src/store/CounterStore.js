import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 0,

  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  decrement: () =>
    set((state) => {
      if (state.count > 0) {
        return {
          count: state.count - 1,
        };
      }

      return state;
    }),
}));
