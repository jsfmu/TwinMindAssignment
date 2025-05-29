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

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LaunchScreen5'>;

const LaunchScreen5: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleGoogleLogin = () => {
    // TODO: Hook into Google login logic
    navigation.navigate('Home');
  };

  const handleAndroidLogin = () => {
    // TODO: Replace with actual Android login or fallback
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/IMG_2147.webp')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
        <Image
          source={require('../../assets/icons/google.png')}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAndroidLogin}>
        <Image
          source={require('../../assets/icons/android.png')}
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
    backgroundColor: 'linear-gradient(180deg, #6A8DB5 0%, #F2A36C 100%)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 180,
    height: 60,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginVertical: 10,
    width: '100%',
    elevation: 2,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#0F172A',
    fontWeight: '500',
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
