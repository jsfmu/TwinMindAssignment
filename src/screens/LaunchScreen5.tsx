import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@navigation/RootNavigator';

// Pre-load images
const images = {
  logo: require('../../assets/images/logos/TwinMindColorfulBG.jpg'),
  google: require('../../assets/images/logos/Google.png'),
  android: require('../../assets/images/logos/Android.png'),
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LaunchScreen5'>;

const LaunchScreen5: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleGoogleLogin = () => {
    navigation.navigate('Login');
  };

  const handleAndroidLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={images.logo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
        <Image
          source={images.google}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAndroidLogin}>
        <Image
          source={images.android}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>Continue with Android</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text
          style={styles.footerLink}
          onPress={() => Linking.openURL('https://your-privacy-policy.com')}
        >
          Privacy Policy
        </Text>
        <Text
          style={styles.footerLink}
          onPress={() => Linking.openURL('https://your-terms-of-service.com')}
        >
          Terms of Service
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LaunchScreen5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A8DB5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 200,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    maxWidth: 300,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 24,
  },
  footerLink: {
    fontSize: 14,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
});
