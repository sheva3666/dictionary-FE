import { create } from "zustand";
import { getAuth, deleteAuth } from "../api/authApi";

export const useAuthStore = create((set) => ({
  isAuth: [],
  isLoading: false,
  error: null,
  getAuth: async (user) => {
    set({ isLoading: true });
    try {
      const response = await getAuth(user);
      set({ data: response.data });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
    set({ isLoading: false });
  },
  deleteAuth: async (user) => {
    set({ isLoading: true });
    try {
      const response = await deleteAuth(user);
      set({ data: response.data });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
    set({ isLoading: false });
  },
}));
