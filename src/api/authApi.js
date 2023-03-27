import axios from "axios";
import { apiUrl } from "../constants";

export const getAuth = async (user) => {
  return await axios.get(`${apiUrl}/auth/${user}`);
};

export const deleteAuth = async (user) => {
  return await axios.delete(`${apiUrl}/auth/${user}`);
};
