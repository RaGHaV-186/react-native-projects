import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const API_URL = 'http://192.168.29.138:8000/api/quotes/random/';
export default function HomeScreen() {
  const [quote, setQuote] = useState<{ text: string; author: string } | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error('Fetch failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quote of the Day</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#6C63FF" />
      ) : (
        <View style={styles.card}>
          <Text style={styles.quoteText}>"{quote?.text}"</Text>
          <Text style={styles.author}>— {quote?.author}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={fetchQuote}>
        <Text style={styles.buttonText}>New Quote</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3D3785',
    marginBottom: 32,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    marginBottom: 32,
  },
  quoteText: {
    fontSize: 18,
    color: '#2D2D2D',
    lineHeight: 28,
    fontStyle: 'italic',
    marginBottom: 16,
  },
  author: {
    fontSize: 14,
    color: '#6C63FF',
    fontWeight: '600',
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});