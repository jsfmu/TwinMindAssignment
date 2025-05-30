import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { useAuth } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();
  const navigation = useNavigation<NavigationProp>();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Sign in error:', error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logos/Google.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text h3 style={styles.title}>TwinMind</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Sign in with Google"
          onPress={handleGoogleSignIn}
          icon={{
            name: 'google',
            type: 'font-awesome',
            size: 20,
            color: 'white',
          }}
          buttonStyle={styles.googleButton}
          containerStyle={styles.buttonWrapper}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    color: '#333',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    marginVertical: 10,
  },
  googleButton: {
    backgroundColor: '#4285F4',
    borderRadius: 8,
    paddingVertical: 12,
  },
}); 