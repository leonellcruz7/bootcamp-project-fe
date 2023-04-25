import Cookies from "universal-cookie";
import axios from "../../node_modules/axios/index";
const cookie = new Cookies();
export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookie.get("access_token")}`,
  },
});
