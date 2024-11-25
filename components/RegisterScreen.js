import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import appStyles from '../assets/appStyles';

// Registration Screen Component
export function RegistrationScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
    alert(`Registered with username: ${email}, password: ${password}`);
  };

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Register</Text>

      <TextInput
        style={appStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={appStyles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={appStyles.button} onPress={handleRegister}>
        <Text style={appStyles.buttonText}>Register</Text>
      </TouchableOpacity>

    </View>
  );
}

export default RegistrationScreen;
