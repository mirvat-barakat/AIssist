import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import styles from '../../screens/Login/styles';
import { Ionicons } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={styles.header}>
         <View style={styles.left}>
          <Image
           style={styles.logo} 
           source={require('../../../assets/images/Logo.png')}
           />
         </View>
         <View style={styles.right}>
           <Ionicons name="list-outline" size={16} style={styles.icon} />
         </View>
        </View>
    );
}