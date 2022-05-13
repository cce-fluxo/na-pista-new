import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../Services/api";

const AuthContext = createContext({});
export default function AuthContextProvider({ children }) {
  const [signInLoading, setSignInLoading] = useState(true);
  const [token, setToken] = useState("");
  const [refresh_token, setRefresh_token] = useState("");
  const [me, setMe] = useState({});

  const loadStoragedData = useCallback(async () => {
    setSignInLoading(true);
    const [token, me] = await AsyncStorage.multiGet([
      "@AppNaPista:token",
      "@AppNaPista:me",
    ]);
    if (token[1] && me[1]) {
      setToken(token[1]);
      setMe(JSON.parse(me[1]));
    }
    setSignInLoading(false);
  }, []);

  const signIn = useCallback(async (email, password, setLoading, navigation) => {
    setLoading(true);
    try {
      let data;
      data = {
        email,
        password,
      };
      const response = await api.post("/auth/login", data);
      const { token, me, refresh_token } = response.data;
      console.log("Requisição enviada, resposta recebida");

      showMessage({
        message: "Login efetuado com sucesso",
        description: "Bem vindo ao App Na Pista",
        type: "success",
        icon: "success",
        duration: 4000,
      });

      await AsyncStorage.multiSet([
        ["@AppNaPista:refresh_token", refresh_token],
        ["@AppNaPista:token", token],
        ["@AppNaPista:me", JSON.stringify(me)],
      ]);

      setMe(me);
      setRefresh_token(refresh_token);
      setToken(token);
      navigation.navigate("Home");
    } catch (err) {
      console.error(err);
      showMessage({
        message: "Erro ao efetuar o login",
        type: "danger",
        icon: "danger",
      });
    }
    setLoading(false);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@AppNaPista:token", "@AppNaPista:me"]);
    setToken("");
    setMe({});
  }, []);

  useEffect(() => {
    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, token, me, setMe, signInLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
