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
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState({});

  const loadStoragedData = useCallback(async () => {
    setSignInLoading(true);
    const [accessToken, user] = await AsyncStorage.multiGet([
      "@AppNaPista:accessToken",
      "@AppNaPista:user",
    ]);
    if (accessToken[1] && user[1]) {
      setAccessToken(accessToken[1]);
      setUser(JSON.parse(user[1]));
    }
    setSignInLoading(false);
  }, []);

  const signIn = useCallback(
    async (email, password, setLoading, navigation) => {
      setLoading(true);
      try {
        let data;
        data = {
          email,
          password,
        };
        const response = await api.post("/auth/login", data);
        const { accessToken, user } = response.data;
        console.log("Requisição enviada, resposta recebida");

        showMessage({
          message: "Login efetuado com sucesso",
          description: "Bem vindo ao App Na Pista",
          type: "success",
          icon: "success",
          duration: 4000,
        });

        await AsyncStorage.multiSet([
          ["@AppNaPista:accessToken", accessToken],
          ["@AppNaPista:user", JSON.stringify(user)],
        ]);

        setUser(user);
        setAccessToken(accessToken);
        navigation.navigate("InicioRoutes");
      } catch (err) {
        console.log(err);
        showMessage({
          message: "Nao foi possível efetuar o login!",
          type: "danger",
          icon: "danger",
        });
      }
      setLoading(false);
    },
    []
  );

  const signUp = useCallback(
    async (
      email,
      password,
      firstName,
      lastName,
      gender,
      birthDate,
      state,
      city,
      neighborhood,
      vehicles,
      vendors,
      setLoading,
      navigation
    ) => {
      setLoading(true);
      try {
        let data;
        data = {
          email,
          password,
          firstName,
          lastName,
          gender,
          birthDate,
          state,
          city,
          neighborhood,
          vehicles,
          vendors,
        };
        const response = await api.post("/auth/signup", data);
        const { accessToken, user } = response.data;
        console.log("Requisição enviada, resposta recebida");

        showMessage({
          message: "Login efetuado com sucesso",
          description: "Bem vindo ao App Na Pista",
          type: "success",
          icon: "success",
          duration: 4000,
        });

        await AsyncStorage.multiSet([
          ["@AppNaPista:accessToken", accessToken],
          ["@AppNaPista:user", JSON.stringify(user)],
        ]);

        setUser(user);
        setAccessToken(accessToken);
        navigation.navigate("Sucesso");
      } catch (err) {
        console.log(err);
        showMessage({
          message: "Nao foi possível efetuar o cadastro!",
          type: "danger",
          icon: "danger",
        });
      }
      setLoading(false);
    },
    []
  );

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      "@AppNaPista:accessToken",
      "@AppNaPista:user",
    ]);
    setAccessToken("");
    setUser({});
  }, []);

  useEffect(() => {
    loadStoragedData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signUp,
        accessToken,
        user,
        setUser,
        signInLoading,
      }}
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
