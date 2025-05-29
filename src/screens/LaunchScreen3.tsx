import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@navigation/RootNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LaunchScreen3'>;

const LaunchScreen3: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleContinue = () => {
    navigation.navigate('LaunchScreen4');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Answers Based On</Text>
      <Text style={styles.title}>Memories & Location</Text>

      <Text style={styles.subtitle}>
        Combine context of your memories, location, and the web to unlock TwinMind’s full potential.
      </Text>

      <Image
        source={require('../../assets/images/onboarding/3.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LaunchScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#0F172A',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#64748B',
    marginVertical: 12,
  },
  image: {
    width: '100%',
    height: 380,
    marginTop: 16,
  },
  button: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '100%',
    marginTop: 24,
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});
