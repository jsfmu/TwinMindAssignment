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

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LaunchScreen2'>;

const LaunchScreen2: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleContinue = () => {
    navigation.navigate('LaunchScreen3');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>100% Privacy with</Text>
      <Text style={styles.title}>Offline Mode</Text>

      <Image
        source={require('../../assets/images/onboarding/2.png')}
        style={styles.lockIcon}
        resizeMode="contain"
      />

      <View style={styles.card}>
        <View style={styles.item}>
          <Text style={styles.checkmark}>✅</Text>
          <View>
            <Text style={styles.boldText}>Your audio is never stored</Text>
            <Text style={styles.subText}>Transcribe locally or on the cloud</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.checkmark}>✅</Text>
          <View>
            <Text style={styles.boldText}>Your data is saved locally</Text>
            <Text style={styles.subText}>Choose local mode or cloud backup</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.checkmark}>✅</Text>
          <View>
            <Text style={styles.boldText}>You own all your data</Text>
            <Text style={styles.subText}>It's never sold or monetized</Text>
          </View>
        </View>
      </View>

      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://twinmind.com/legal/privacy-policy')}
      >
        Our Privacy Policy
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Accept and Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LaunchScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    padding: 24,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#0F172A',
    marginTop: 16,
  },
  lockIcon: {
    width: 64,
    height: 64,
    marginVertical: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  item: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  checkmark: {
    fontSize: 18,
    marginTop: 4,
  },
  boldText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#0F172A',
  },
  subText: {
    fontSize: 14,
    color: '#64748B',
  },
  link: {
    color: '#1D4ED8',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '100%',
    marginBottom: 30,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});
