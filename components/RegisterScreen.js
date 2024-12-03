import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import appStyles from '../assets/appStyles';
import { firebase } from '../firebaseConfig';  // Import Firebase

export function RegistrationScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'You have successfully registered! Please log in.', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Login');  
          }
      
        }
      ]);
    } catch (error) {
      Alert.alert('Error', `Failed to register: ${error.message}`);
    }
  };


/*

// The database was working but using firebase auth to enable the user to register and login, i have to remove db collection 
  but i will fix it later
   try {
      // Store email and password in Firestore as plain strings
      await db.collection('users').add({
        email: email,
        password: password, 
      });

*/

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
