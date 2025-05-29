import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@navigation/RootNavigator';

const LaunchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleContinue = () => {
    navigation.navigate('LaunchScreen2');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Capture Every Word,{'\n'}Meeting or Lecture</Text>
        <Text style={styles.subtitle}>
          Never take notes again! Get free unlimited transcription — even offline inside your pocket.
        </Text>
      </View>

      <Image
        source={require('../../assets/images/onboarding/1.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LaunchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 20,
    justifyContent: 'space-between',
  },
  topContainer: {
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F172A',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 16,
  },
  image: {
    width: '100%',
    height: 380,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 16,
    borderRadius: 30,
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18,
  },
});
