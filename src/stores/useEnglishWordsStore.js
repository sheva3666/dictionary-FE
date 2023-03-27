import { create } from "zustand";
import { getEnglishWords } from "../api/englishWordsApi";

export const useEnglishWordsStore = create((set) => ({
  data: [],
  isLoading: false,
  error: null,
  getEnglish: async () => {
    set({ isLoading: true });
    try {
      const response = await getEnglishWords();
      console.log(response);
      set({ data: response.data });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
    set({ isLoading: false });
  },
}));
