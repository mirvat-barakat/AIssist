import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';



export default function HomeScreen({ navigation }) {
    return(
        <SafeAreaView>
            <Header/>
            <TouchableOpacity style={styles.shareButton} >
                      <Text style={styles.shareButtonText} title="Close Modal" onPress={() => navigation.goBack()} >Share</Text>
                    </TouchableOpacity>
        </SafeAreaView>
    );
}