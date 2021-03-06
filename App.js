import React from "react";
import { StatusBar } from "react-native";
import MainRoutes from "./src/Routes/main.routes.js";
import AuthProvider from "./src/Contexts/auth";
import FlashMessage from "react-native-flash-message";
import AppLoading from "expo-app-loading";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { Ubuntu_500Medium, Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";
import { QueryClient, QueryClientProvider } from "react-query";

import { useOnlineManager } from "./src/hooks/useOnlineManager";

const queryClient = new QueryClient();

export default function App() {
  useOnlineManager();
  
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Ubuntu_500Medium,
    Ubuntu_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <StatusBar translucent backgroundColor={"black"} />
          <MainRoutes />
          <FlashMessage position="top" hideStatusBar={true} floating={true} />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
