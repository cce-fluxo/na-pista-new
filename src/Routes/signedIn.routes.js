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
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigatorRoutes" component={TabNavigatorRoutes} />
      <Stack.Screen name="Menu Configurações" component={SettingsMenu} />
      <Stack.Screen name="Ajuda" component={SettingsHelp} />
      <Stack.Screen name="ExportarDados" component={SettingsExportData} />
      <Stack.Screen name="Perfil" component={SettingsPerfil} />
      <Stack.Screen name="Configurações" component={Settings} />
      <Stack.Screen name="Add Ganhos" component={AddGanhos} />
      <Stack.Screen name="Add Ganhos Multiplos" component={AddGanhosMultiplos} />
      <Stack.Screen name="Add Gastos" component={AddGastos} />
    </Stack.Navigator>
  );
}
