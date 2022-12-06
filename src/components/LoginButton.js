import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const LoginButton = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
        paddingVertical: 14,
        marginTop: 20,
        marginHorizontal: 25,
        borderRadius: 50,
        elevation: 2,
      }} onPress={() => navigation.navigate('Profil')}>
      <Text style={{color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold'}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
