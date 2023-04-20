import React from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function Header(){
    return(
        <SafeAreaView style={styles.header}>
         <View>
          <Image
           style={styles.logo1} 
           source={require('../../../assets/images/Logo.png')}
           />
         </View>
         <View>
           <Ionicons name="list-outline" size={30} style={styles.icon} />
         </View>
        </SafeAreaView>
    );
}