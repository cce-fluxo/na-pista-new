import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "https://na-pista.herokuapp.com/",
});

api.interceptors.request.use(async (config) => {
  const accessToken = await AsyncStorage.getItem("@AppNaPista:accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default api;
