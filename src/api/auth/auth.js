import axios from "axios";

const baseURL = "https://vivian-real.salawat.me/api";

const endpoints = {
  registration: (data) => axios.post(`${baseURL}/register`, data),
  login: (data) => axios.post(`${baseURL}/login`, data),
  getme: (token) =>
    axios.get(`${baseURL}/getme`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export const { registration, login, getme } = endpoints;
