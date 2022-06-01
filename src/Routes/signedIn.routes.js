import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import { colors, screenHeight, screenWidth } from "../Constants/constants";
import Home from "../Pages/Home";
import AtividadesRoutes from "./atividades.routes";

const Tab = createBottomTabNavigator();

 export default function SignedInRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        style: {
          position: "absolute",
          height: screenHeight * 0.1,
          minHeight: 60,
        },
        showLabel: true,
        labelStyle: { fontSize: 14 },
        tabBarActiveTintColor: colors.background,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={25}
              color={focused ? colors.background : colors.inputTitle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Atividades"
        component={AtividadesRoutes}
        options={{
          tabBarLabel: "Atividades",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="list-alt"
              size={25}
              color={focused ? colors.background : colors.inputTitle}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Resultados"
        component={AtividadesRoutes}
        options={{
          tabBarLabel: "Resultados",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="bar-chart"
              size={25}
              color={focused ? colors.background : colors.inputTitle}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
