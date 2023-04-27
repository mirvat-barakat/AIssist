import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const Header1 = ({ title, backgroundColor, onPressBackButton }) => {

    return (
        <View style={[styles.container, { backgroundColor } ]}>
          <TouchableOpacity style={styles.backButton} onPress={onPressBackButton}>
            <Ionicons name="ios-arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
             <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      );
};

export default Header1;