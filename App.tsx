import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import { AuthProvider } from './src/contexts/AuthContext';
import { RootNavigator } from './src/navigation/RootNavigator';
import { app, auth } from './src/config/firebase'; // Import Firebase config to ensure initialization

// Ensure Firebase is initialized
if (!app) {
  throw new Error('Firebase app not initialized');
}

const App = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default App;
