import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignedIn from "./signedIn.routes";

const Stack = createStackNavigator();

export default function AtividadesRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignedIn"
        component={SignedIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
