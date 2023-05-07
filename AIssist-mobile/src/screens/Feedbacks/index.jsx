import React from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import FeedbackForm from '../../components/FeedbackForm';

export default function FeedbacksScreen() {


    return(
        <ScrollView style={styles.mainViewFeedbacks}>
            <View style={styles.intro}>
                <Text style={styles.feedbacksText}>Please fill out this form to help us determine  which feedbacks best suits your child case.</Text>
            </View>
            <FeedbackForm/>
        </ScrollView>
    )
};