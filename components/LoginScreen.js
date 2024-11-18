import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import appStyles from '../assets/appStyles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //console.log('Login pressed:', { email, password });
    alert(`'Login pressed: ${email}, password: ${password}`);
  };

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Login</Text>
      <TextInput
        style={appStyles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={appStyles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={appStyles.button} onPress={handleLogin}>
        <Text style={appStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={appStyles.link}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={appStyles.linkText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
