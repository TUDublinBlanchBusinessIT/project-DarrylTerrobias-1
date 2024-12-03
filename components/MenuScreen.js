import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import appStyles from '../assets/appStyles';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>This is the menu and you passed the login stage</Text>

      <TouchableOpacity
        style={appStyles.button}
        onPress={() => navigation.navigate('Login')} // Too see if it works
      >
        <Text style={appStyles.buttonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuScreen;
