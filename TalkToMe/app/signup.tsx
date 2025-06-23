import React, { useState } from 'react';
import { Switch, ImageBackground, TouchableOpacity, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [isPatient, setIsPatient] = useState(false);

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.formBox}>
          <Text style={styles.header}>Sign Up</Text>
          <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
          <TextInput style={styles.input} placeholder="Retype Password" value={retypePassword} onChangeText={setRetypePassword} secureTextEntry />
          <View style={styles.switchContainer}>
            <Text>Patient</Text>
            <Switch value={isPatient} onValueChange={setIsPatient} />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/verify')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.back()}>
            <Text style={styles.buttonText}>Back to Sign In</Text>
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    justifyContent: 'space-between',
    height: 30,
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
    marginBottom: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Righteous',
  },
});

const backgroundImage = require('../assets/images/background.png');