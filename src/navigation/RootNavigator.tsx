import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';
import { LoginScreen } from '../screens/LoginScreen';
import LaunchScreen from '../screens/LaunchScreen';
import LaunchScreen2 from '../screens/LaunchScreen2';
import LaunchScreen3 from '../screens/LaunchScreen3';
import LaunchScreen4 from '../screens/LaunchScreen4';
import LaunchScreen5 from '../screens/LaunchScreen5';
import { ActivityIndicator, View } from 'react-native';

export type RootStackParamList = {
  Launch: undefined;
  LaunchScreen2: undefined;
  LaunchScreen3: undefined;
  LaunchScreen4: undefined;
  LaunchScreen5: undefined;
  Login: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Launch" component={LaunchScreen} />
            <Stack.Screen name="LaunchScreen2" component={LaunchScreen2} />
            <Stack.Screen name="LaunchScreen3" component={LaunchScreen3} />
            <Stack.Screen name="LaunchScreen4" component={LaunchScreen4} />
            <Stack.Screen name="LaunchScreen5" component={LaunchScreen5} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        ) : (
          <Stack.Screen name="Main" component={LaunchScreen5} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
