import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddGastos from "../Pages/AddGastos";
import AddGanhosMultiplos from "../Pages/AddGahosMultiplos";

const Stack = createStackNavigator();

export default function AtividadesRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Add Gasto"
        component={AddGastos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add ganhos multiplos"
        conponent={AddGanhosMultiplos}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
