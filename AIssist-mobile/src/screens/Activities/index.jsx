import React from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';

export default function ActivitiesScreen() {


    return(
        <SafeAreaView style={styles.mainView}>
            <Header/>
        </SafeAreaView>
    )
};