import React from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../../components/Header';

export default function QuestionsScreen() {


    return(
        <ScrollView style={styles.mainViewQuestions}>
            <Header/>
            <View>
                <Text style={styles.questionsTitle}>Questions</Text>
                <Text style={styles.questionsText}>Welcome! Ask any questions you have about your child's condition and we'll do our best to help you find the answers you need.</Text>
            </View>
            <View style={styles.container}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your question"
                multiline
                />
                    <MaterialIcons name="search" size={30} color='black' style={styles.searchIcon} />
            </View>
            </View>
        </ScrollView>
    )
};