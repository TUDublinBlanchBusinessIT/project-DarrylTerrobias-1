import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import appStyles from '../assets/appStyles';
import { db } from '../firebaseConfig'; 


export function RegistrationScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      // Store email and password in Firestore as plain strings
      await db.collection('users').add({
        email: email,
        password: password, 
      });

  
      // Show success alert and tells user that it worked and to go back to the login screen to login
      Alert.alert('Success', 'You have successfully registered! \n Go back to login screen', [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to the Login screen after the alert is dismissed
            navigation.navigate('LoginScreen');
          }
        }
      ]);

  
    } catch (error) {
      Alert.alert('Error', `Failed to register: ${error.message}`);
    }
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
