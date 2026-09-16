import { create } from "zustand";

export const useUserDetailsStore = create((set) => ({
  name: null,
  age: null,

  setName: () => set({ name: "smith" }),
  setAge: () => set({ age: 40 }),
}));
