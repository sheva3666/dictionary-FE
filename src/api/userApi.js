import axios from "axios";
import { apiUrl } from "../constants";

export const getUser = async (user, password) => {
  return await axios.get(`${apiUrl}/users/${user}/${password}`);
};

export const createUser = async (newUser) => {
  await axios.post(`${apiUrl}/users`, newUser);
};
