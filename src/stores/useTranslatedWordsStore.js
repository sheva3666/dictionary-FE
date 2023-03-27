import { create } from "zustand";
import { getTranslatedWords } from "../api/translatedWordsApi";

export const useEnglishWordsStore = create((set) => ({
  data: [],
  isLoading: false,
  error: null,
  getEnglish: async () => {
    set({ isLoading: true });
    try {
      const response = await getTranslatedWords();
      set({ data: response.data });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
    set({ isLoading: false });
  },
}));
