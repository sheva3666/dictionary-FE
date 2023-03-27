import { create } from "zustand";
import { getUser } from "../api/userApi";

export const useUserStore = create((set) => ({
  user: [],
  isLoading: false,
  error: null,
  getUser: async (user, password) => {
    set({ isLoading: true });
    try {
      const response = await getUser(user, password);
      set({ data: response.data });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
    set({ isLoading: false });
  },
}));
