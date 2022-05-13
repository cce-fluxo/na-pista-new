import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "https://na-pista.herokuapp.com/",
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("@AppNaPista:token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
