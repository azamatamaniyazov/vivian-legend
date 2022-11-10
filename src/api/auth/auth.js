import axios from "axios";

const baseURL = "https://vivian-real.salawat.me/api";

const endpoints = {
  registration: (data) => axios.post(`${baseURL}/register`, data),
  login: (data) => axios.post(`${baseURL}/login`, data),
  getProfile: () => axios.post("/getme"),
  getViewBasket: (token) =>
    axios.get(`${baseURL}/baskets/demo`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  updateOrder: (token, basketId, orderId, count) =>
    axios.patch(
      `${baseURL}/baskets/${basketId}/${orderId}`,
      { count },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ),
};

export const { registration, login, getProfile, getViewBasket, updateOrder } =
  endpoints;
