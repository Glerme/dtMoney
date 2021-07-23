import axios from "axios";

export const api = axios.create({
  baseURL: "https://dtmoneygf.vercel.app/api",
});
