import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Pages/Home";
import SettingsMenu from '../Pages/SettingsMenu';
import SettingsHelp from "../Pages/Settings/Ajuda/index";
import SettingsExportData from "../Pages/Settings/ExportarDados/index";
import SettingsPerfil from "../Pages/Settings/Perfil/index";
import Settings from "../Pages/Settings/Configurações/index";

const Stack = createStackNavigator();

function SignedOutRoutes() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu Configurações" component={SettingsMenu} />
        <Stack.Screen name="Ajuda" component={SettingsHelp} />
        <Stack.Screen name="ExportarDados" component={SettingsExportData} />
        <Stack.Screen name="Perfil" component={SettingsPerfil} />
        <Stack.Screen name="Configurações" component={Settings} />
      </Stack.Navigator>
  );
}

export default SignedOutRoutes;