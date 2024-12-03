import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import appStyles from '../assets/appStyles';
import { firebase, db } from '../firebaseConfig'; // Import Firestore and Firebase

export function RegistrationScreen({ navigation }) {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input

  const handleRegister = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      // Firebase Authentication
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);

      // Save user data in Firestore 
      await db.collection('users').add({ // Added Firestore integration
        email: email, // Storing email
        password: password, 
      });

      Alert.alert('Success', 'You have successfully registered! Please log in.', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'), // Brings you back to the login screen
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
        keyboardType="email-address" // Added to handle email input properly
      />

      <TextInput
        style={appStyles.input}
        placeholder="Password"
        secureTextEntry // Makes the input secure for passwords
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
