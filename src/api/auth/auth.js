import axios from "axios";

const baseURL = "https://vivian-real.salawat.me/api";

const endpoints = {
  registration: (data) => axios.post(`${baseURL}/register`, data),
  login: (data) => axios.post(`${baseURL}/login`, data),
};

export const { registration, login } = endpoints;
