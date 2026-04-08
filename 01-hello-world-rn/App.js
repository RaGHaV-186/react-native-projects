import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.greeting}>Hello, World!</Text>
      <Text style={styles.subtitle}>My first React Native app</Text>

      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />

      <Text style={styles.footer}>Built with React Native + Expo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  logo: {
    width: 80,
    height: 80,
    marginVertical: 20,
  },
  footer: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 20,
  },
});