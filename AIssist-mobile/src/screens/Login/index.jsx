import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image
          style={styles.logo} 
          source={require('../../../assets/images/Logo.png')}
            />
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
                 <Text style={styles.inputLabel}> <Ionicons name="ios-mail" size={24} style={styles.icon} /> Email:</Text>
                 <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  onChangeText={text => setEmail(text)}
                  setEmail={setEmail}
                  email={email}
                 />
            </View>
            <View style={styles.inputContainer}>
                 <Text style={styles.inputLabel}> <Ionicons name="key-outline" size={24} style={styles.icon} /> Password:</Text>
                 <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  onChangeText={text => setPassword(text)}
                  setPassword={setPassword}
                  password={password}
                  secureTextEntry
                 />
            </View>
            <TouchableOpacity style={styles.forgotPasswordLink} >
                  <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
                 <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerLink} >
                  <Text style={styles.registerText}>Don't have an account? <Text style={styles.registerLink}>Register Now</Text></Text>
            </TouchableOpacity>
        </View>
    );
}