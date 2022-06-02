import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignedOut from "./signedOut.routes";
import SignedIn from "./signedIn.routes";

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
          name="SignedIn"
          component={SignedIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
