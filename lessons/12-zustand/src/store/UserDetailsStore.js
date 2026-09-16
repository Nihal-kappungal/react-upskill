import { create } from "zustand";

export const useUserDetailsStore = create((set) => ({
  user: "",
  loading: "",
  error: null,

  fetchDetails: async (id) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const data = await response.json();

      set({ user: data, loading: false });
    } catch (error) {
      set({ error: "Failed to Fetch Data", loading: false });
    }
  },
}));
