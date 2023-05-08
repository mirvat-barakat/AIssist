import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import FeedbackForm from '../../components/FeedbackForm';

export default function FeedbacksScreen() {
    const[activities, setActivities]= useState([]);


    return(
        <ScrollView style={styles.mainViewFeedbacks}>
            <View style={styles.intro}>
                <Text style={styles.feedbacksText}>Please fill out this form to help us determine  which feedbacks best suits your child case.</Text>
            </View>
            <FeedbackForm/>
            <View style={styles.generatedActivities}>
                       {activities.map(activity=> (
                        <View style={styles.activityView}>
                        <View key={activity.id}>
                          <View style={styles.card} >
                             <View style={styles.specialistInfo}>
                                <Text style={styles.activityName}>{activity.name}</Text>
                                <Text style={styles.activityDescription}>{activity.description}</Text>
                          </View>
                             </View>
                          </View> 
                        </View>
                       ))}
            </View>
        </ScrollView>
    )
};