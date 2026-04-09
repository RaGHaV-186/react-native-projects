import { useState } from 'react';
import {
  StyleSheet, Text, View,
  TextInput, TouchableOpacity, Alert, FlatList
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim() === '') {
      Alert.alert('Oops!', 'Please type something first.');
      return;
    }
    const newTodo = {
      id: Date.now().toString(),
      text: inputText.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const renderTodo = ({ item }) => (
    <View style={styles.todoRow}>
      <TouchableOpacity
        style={styles.todoTextArea}
        onPress={() => toggleTodo(item.id)}
      >
        <View style={[styles.checkbox, item.completed && styles.checkboxDone]} />
        <Text style={[styles.todoText, item.completed && styles.todoTextDone]}>
          {item.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deleteTodo(item.id)}>
        <Text style={styles.deleteBtn}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>My To-Do List</Text>
      <Text style={styles.subtitle}>
        {todos.length === 0 
        ? 'No task yet': todos.every(t => t.completed) ? 'All done': `${todos.filter(t => t.completed).length}/${todos.length} done`}
      </Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={addTodo}
          returnKeyType="done"
        />
        <TouchableOpacity style={[
            styles.addBtn, 
            !inputText.trim() && { backgroundColor: '#ccc' } 
            ]} onPress={addTodo}>
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={renderTodo}
        style={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Add your first task above!</Text>
        }
      />

      {todos.length > 0 && (
        <TouchableOpacity
        style={styles.clearBtn} 
        onPress={() => setTodos([])}
        >
          <Text style={styles.clearBtnText}>Clear All Tasks</Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
    marginTop: 4,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  addBtn: {
    backgroundColor: '#5c6bc0',
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  list: {
    flex: 1,
  },
  todoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  todoTextArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#5c6bc0',
  },
  checkboxDone: {
    backgroundColor: '#5c6bc0',
  },
  todoText: {
    fontSize: 16,
    color: '#1a1a2e',
    flex: 1,
  },
  todoTextDone: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  emptyText: {
    textAlign: 'center',
    color: '#bbb',
    marginTop: 60,
    fontSize: 16,
  },
  clearBtn: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
  },
  clearBtnText: {
    color: '#ff5252',
    fontWeight: '600',
    fontSize: 16,
  },
});

