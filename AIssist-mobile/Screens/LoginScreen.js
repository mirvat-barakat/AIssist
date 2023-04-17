import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';


export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image
          style={styles.logo} 
          source={require('../assets/images/Logo.png')}
            />
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
                 <Text style={styles.inputLabel}> Email:</Text>
                 <TextInput
                  style={styles.input}
                  placeholder="Enter your username"
                  onChangeText={text => setUsername(text)}
                  value={username}
                 />
            </View>
            <View style={styles.inputContainer}>
                 <Text style={styles.inputLabel}> Password:</Text>
                 <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  onChangeText={text => setPassword(text)}
                  value={password}
                  secureTextEntry
                 />
            </View>
            <TouchableOpacity style={styles.button} >
                 <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}