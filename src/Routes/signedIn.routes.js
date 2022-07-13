import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigatorRoutes from "./tabNavigator.routes";
import SettingsMenu from "../Pages/SettingsMenu";
import SettingsHelp from "../Pages/Settings/Ajuda";
import SettingsExportData from "../Pages/Settings/ExportarDados";
import SettingsPerfil from "../Pages/Settings/Perfil";
import Settings from "../Pages/Settings/Configurações";
import AddGanhos from "../Pages/AddGanhos";
import AddGanhosMultiplos from "../Pages/AddGanhosMultiplos";
import AddGastos from "../Pages/AddGastos";

const Stack = createStackNavigator();

export default function SignedInRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigatorRoutes"
        component={TabNavigatorRoutes}
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
      <Stack.Screen
        name="Add Ganhos"
        component={AddGanhos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add Ganhos Multiplos"
        component={AddGanhosMultiplos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add Gastos"
        component={AddGastos}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
