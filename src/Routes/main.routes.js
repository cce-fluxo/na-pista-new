import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignedIn from './signedIn.routes';
import SignedOut from './signedOut.routes';

const Stack = createStackNavigator();

export default function SignedOutRoutes() {
  // const { signedIn } = useSelector(state => state.auth);
  return (
    <Stack.Navigator>
      {/* {signedIn ? (
        <Stack.Screen
          name='SignedIn'
          component={SignedIn}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name='SignedOut'
          component={SignedOut}
          options={{ headerShown: false }}
        />
      )} */}
      <Stack.Screen
        name='SignedIn'
        component={SignedIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignedOut'
        component={SignedOut}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}