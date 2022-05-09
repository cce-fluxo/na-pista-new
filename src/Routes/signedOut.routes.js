import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "../Pages/FirstScreen";
import Login from "../Pages/Login";
import CreateAccount from "../Pages/CreateAccount";
import BasicInfo from "../Pages/BasicInfo";
import WhereYouLive from "../Pages/WhereYouLive";
import Vehicles from "../Pages/Vehicles";
import Platform from "../Pages/Platform";
import EarningGoals from "../Pages/EarningGoals";
import Success from "../Pages/Success";
import Home from "../Pages/Home";
import SettingsMenu from '../Pages/SettingsMenu';
import SettingsHelp from "../Pages/Settings/Ajuda/index";
import SettingsExportData from "../Pages/Settings/ExportarDados/index";
import SettingsPerfil from "../Pages/Settings/Perfil/index";
import Settings from "../Pages/Settings/Configurações/index";

const Stack = createStackNavigator();

function SignedOutRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Informacoes basicas" component={BasicInfo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Criar conta" component={CreateAccount} />
        <Stack.Screen name="Onde voce mora" component={WhereYouLive} />
        <Stack.Screen name="Veiculos" component={Vehicles} />
        <Stack.Screen name="Plataformas" component={Platform} />
        <Stack.Screen name="Metas de Ganho" component={EarningGoals} />
        <Stack.Screen name="Sucesso" component={Success} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu Configurações" component={SettingsMenu} />
        <Stack.Screen name="Ajuda" component={SettingsHelp} />
        <Stack.Screen name="ExportarDados" component={SettingsExportData} />
        <Stack.Screen name="Perfil" component={SettingsPerfil} />
        <Stack.Screen name="Configurações" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SignedOutRoutes;