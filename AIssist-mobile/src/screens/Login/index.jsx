import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, Image, Alert } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";



export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const data = JSON.stringify({
      "email": email,
      "password": password
     });

    
      const handleLogin  = async () => {
    
        const config = {
          method: "POST",
          data:data,
          url: 'http://192.168.1.6:8000/api/v0.0.1/login',
          headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
          },
        };
        try {
          const res = await axios(config);
          if (res.data.status == "success") {
            // await AsyncStorage.setItem("token", res.data.authorisation.token);
            await localStorage.setItem("token", res.data.authorisation.token);
            navigation.navigate('DrawerNavigator');
          }
        } catch (error) {
          return error.response;
        }
      };


    return (
        <SafeAreaView style={styles.container}>
            <Image
          style={styles.logo} 
          source={require('../../../assets/images/Logo.png')}
            />
            {/* <Text style={styles.title}>LOGIN</Text> */}
            <View style={styles.form}>
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
            <TouchableOpacity style={styles.forgotPasswordLink} >
                  <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogin} >
                 <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <View>
                  <Text style={styles.registerText}>Don't have an account? <TouchableOpacity  onPress={() => navigation.navigate('Register')}><Text style={styles.registerLink}>Register Now</Text></TouchableOpacity ></Text>
            </View>
            </View>
        </SafeAreaView>
    );
}