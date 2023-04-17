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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F08080',
        alignItems: 'center',
        justifyContent: 'center',
      },
    logo: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginTop: -10,
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop:-20,
      },
    inputContainer: {
        width: 250,
        marginBottom: 20,
      },
    inputLabel: {
        marginBottom: 10,
        fontSize:20,
      },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor:'#FFFFFF',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
      },
    button: {
        backgroundColor: '#FFC6C6',
        borderRadius: 10,
        padding: 12,
        alignItems: 'center',
        width: 100,
        marginBottom: 10,
        marginTop:10,
      },
    buttonText: {
        color: '#fff',
        fontSize: 18,
      },

});