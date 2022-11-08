import axios from "./axios";

const endpoints = {
  registration: (data) => axios.post("/register", data),
  login: (data) => axios.post("/login", data),
  getProfile: () => axios.post("/getme"),
  getViewBasket: () => axios.get("/baskets/demo"),
};

export const { registration, login, getProfile, getViewBasket } = endpoints;
