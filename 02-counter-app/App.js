import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [count, setCount] = useState(0);
  const step = 5
  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Counter App</Text>

      <Text style={[styles.count, { color: count > 1 ? '#2ecc71' : count < 1 ? '#e74c3c' : '#1a1a2e' }]}>{count}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.decrementBtn]} onPress={decrement}>
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.resetBtn]} onPress={reset}>
          <Text style={styles.buttonText}>R</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.incrementBtn]} onPress={increment} disabled={count > 10}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.hint}>
        {count === 0 ? 'Start counting!' : count > 0 ? 'Going up!' : 'Going negative!'}
      </Text>

    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  count: {
    fontSize: 96,
    fontWeight: 'bold',
    width: 200,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decrementBtn: {
    backgroundColor: '#e74c3c',
  },
  incrementBtn: {
    backgroundColor: '#2ecc71',
  },
  resetBtn: {
    backgroundColor: '#95a5a6',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  hint: {
    fontSize: 16,
    color: '#888',
  },
});