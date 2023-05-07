import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import FeedbackForm from '../../components/FeedbackForm';

export default function HomeScreen() {
    return(
        <SafeAreaView>
            <FeedbackForm/>
        </SafeAreaView>
    );
}