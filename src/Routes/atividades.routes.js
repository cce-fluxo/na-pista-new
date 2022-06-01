import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignedIn from "./signedIn.routes";
import AddGanhos from "../Pages/AddGanhos";
import AddGanhosMultiplos from "../Pages/AddGanhosMultiplos";
import AddGastos from "../Pages/AddGastos";

const Stack = createStackNavigator();

export default function AtividadesRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignedIn"
        component={SignedIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddGanhos"
        conponent={AddGanhos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddGanhosMultiplos"
        conponent={AddGanhosMultiplos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddGasto"
        component={AddGastos}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
