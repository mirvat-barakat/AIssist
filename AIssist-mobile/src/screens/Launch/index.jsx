import React from 'react';
import { Text, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';


export default function LaunchScreen({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../../assets/images/Logo.png')} />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Let's Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
}