import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Pages/Home";
import SettingsMenu from "../Pages/SettingsMenu";
import SettingsHelp from "../Pages/Settings/Ajuda/index";
import SettingsExportData from "../Pages/Settings/ExportarDados/index";
import SettingsPerfil from "../Pages/Settings/Perfil/index";
import Settings from "../Pages/Settings/Configurações/index";

const Stack = createStackNavigator();

export default function InicioRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu Configurações"
        component={SettingsMenu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ajuda"
        component={SettingsHelp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExportarDados"
        component={SettingsExportData}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Perfil"
        component={SettingsPerfil}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Configurações"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
