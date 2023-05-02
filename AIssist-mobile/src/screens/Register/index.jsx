import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, Image, Alert  } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import Header1 from '../../components/Header1';
import axios from "axios";

export default function RegisterScreen({navigation}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
   const handleRegister= (e) => {

    e.preventDefault();
    axios.post('http://192.168.1.6:8000/api/v0.0.1/register', {
        'name': name,
        'email': email,
        'password': password
    }, {
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
        }
    })
    .then(response => {
        if (response.data.status == "success"){
            Alert.alert("success");
        }
    })
    .catch(error => {
        console.log(error);
    });
};

    return (
        <SafeAreaView style={styles.view}>
            <Header1 title="Register" backgroundColor='#FFC6C6'onPressBackButton={() => navigation.navigate('Login')} />
            <View style={styles.container}>
              <View style={styles.inputContainer}>
                 <Text style={styles.inputLabel}>  <Ionicons name="person" size={24} style={styles.icon} /> Name</Text>
                 <TextInput
                  style={styles.input}
                  placeholder="Enter your name"
                  onChangeText={text => setName(text)}
                  setName={setName}
                  value={name}
                 />
              </View>
              <View style={styles.inputContainer}>
                 <Text style={styles.inputLabel}> <Ionicons name="ios-mail" size={24} style={styles.icon} /> Email</Text>
                 <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  onChangeText={text => setEmail(text)}
                  setEmail={setEmail}
                  value={email}
                 />
              </View>
              <View style={styles.inputContainer}>
                 <Text style={styles.inputLabel}> <Ionicons name="key-outline" size={24} style={styles.icon} /> Password</Text>
                 <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  onChangeText={text => setPassword(text)}
                  setPassword={setPassword}
                  value={password}
                  secureTextEntry
                 />
              </View>
              <TouchableOpacity style={styles.button} >
                 <Text style={styles.buttonText} onPress={handleRegister}>REGISTER</Text>
              </TouchableOpacity>
              <View >
                  <Text style={styles.loginText}>Already have an account? <TouchableOpacity  onPress={() => navigation.navigate('Login')}><Text style={styles.loginLink}>Login Now</Text></TouchableOpacity ></Text>
              </View>
          </View>
        </SafeAreaView>
    );
}