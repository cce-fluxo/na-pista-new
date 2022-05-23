import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddGastos from "../Pages/AddGastos/index";

const Stack = createStackNavigator();

export default function AtividadesRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Gasto"
        component={AddGastos}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
