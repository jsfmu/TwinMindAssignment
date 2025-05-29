import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LaunchScreen from '@screens/LaunchScreen';
import LaunchScreen2 from '@screens/LaunchScreen2';
import HomeScreen from '@screens/HomeScreen';
import LaunchScreen3 from '@screens/LaunchScreen3';
import LaunchScreen4 from '@screens/LaunchScreen4';
import LaunchScreen5 from '@screens/LaunchScreen5';
export type RootStackParamList = {
  LaunchScreen: undefined;
  LaunchScreen2: undefined;
  Home: undefined;
  LaunchScreen3: undefined;
  LaunchScreen4: undefined;
  LaunchScreen5: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LaunchScreen">
      <Stack.Screen
        name="LaunchScreen"
        component={LaunchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LaunchScreen2"
        component={LaunchScreen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="LaunchScreen3"
        component={LaunchScreen3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LaunchScreen4"
        component={LaunchScreen4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LaunchScreen5"
        component={LaunchScreen5}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
