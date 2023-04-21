import axios from "../../node_modules/axios/index";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
