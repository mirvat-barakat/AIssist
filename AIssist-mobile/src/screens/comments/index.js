import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';



export default function HomeScreen({ navigation }) {
    return(
        <SafeAreaView>
            <TouchableOpacity style={styles.shareButton} >
                      <Text style={styles.shareButtonText} title="Close Modal" onPress={() => navigation.goBack()} >Back</Text>
                    </TouchableOpacity>
        </SafeAreaView>
    );
}