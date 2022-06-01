import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import InicioRoutes from "./inicio.routes";
import SignedOut from "./signedOut.routes";

const Stack = createStackNavigator();

export default function MainRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignedOut"
          component={SignedOut}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InicioRoutes"
          component={InicioRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
