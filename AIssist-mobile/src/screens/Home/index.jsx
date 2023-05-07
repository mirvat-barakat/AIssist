import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, Image } from 'react-native';
import styles from './styles';
import FeedbackForm from '../../components/FeedbackForm';

export default function HomeScreen() {
    return(
        <ScrollView>
            <FeedbackForm/>
        </ScrollView>
    );
}