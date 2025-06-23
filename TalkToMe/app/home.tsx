import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Talk To Me!</Text>
        </View>
        <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/game')}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/patients')}>
                <Text style={styles.buttonText}>Data</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: darken overlay
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slight transparency
    padding: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Android shadow
    width: '100%',
    maxWidth: 400,
  },
  header: { fontSize: 28, marginBottom: 20, textAlign: 'center', fontFamily: 'Righteous'},
  title: { fontSize: 100, textAlign: 'center', fontFamily: 'Righteous', color: '#0080F0'},
  input: {
    height: 36,
    fontSize: 12,
    borderWidth: 1,
    marginBottom: 6,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 5,
    textAlignVertical: 'center',
  },
  button: {
    backgroundColor: '#008000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Righteous',
  },
});

const backgroundImage = require('../assets/images/background.png');
