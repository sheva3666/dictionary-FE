import axios from "axios";
import { apiUrl } from "../constants";

export const getTranslatedWords = async () => {
  const user = "admin";
  return await axios.get(`${apiUrl}/translate/${user}/ukrainian`);
};
