import * as React from "react";
import InicioRoutes from "./inicio.routes";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {colors, screenHeight, screenWidth} from '../Constants/constants';
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";


const Tab = createBottomTabNavigator();

function SignedInRoutes() {
  return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            style: {
            position: 'absolute',
            height: screenHeight * 0.1,
            minHeight: 60,
            },
            showLabel: true,
            labelStyle: { fontSize: 14 },
            tabBarActiveTintColor: colors.background
        }}
        >
        <Tab.Screen
            name="Home"
            component={InicioRoutes}
            options={{
            tabBarLabel: 'Início',
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
            component={InicioRoutes}
            options={{
            tabBarLabel: 'Atividades',
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
                component={InicioRoutes}
                options={{
                tabBarLabel: 'Resultados',
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

export default SignedInRoutes;
