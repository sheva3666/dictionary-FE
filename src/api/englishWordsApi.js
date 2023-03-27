import axios from "axios";
import { apiUrl } from "../constants";

export const getEnglishWords = async () => {
  const user = "admin";
  return await axios.get(`${apiUrl}/english/${user}`);
};

export const createWords = async (newWord) => {
  await axios.post(`${apiUrl}/english`, newWord);
};
