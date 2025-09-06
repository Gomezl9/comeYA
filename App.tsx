import React from 'react';
import { StyleSheet, Text, View, Pressable, Platform, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert(`Hola desde ${Platform.OS}! 🚀`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 Bienvenido a ComeYA</Text>
      <Text style={styles.subtitle}>
        Estás corriendo en: {Platform.OS.toUpperCase()}
      </Text>

      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Haz click aquí</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F6FF',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 3, // sombra en Android
    shadowColor: '#000', // sombra en iOS/web
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
