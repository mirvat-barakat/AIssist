import React from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';

export default function FeedbacksScreen() {


    return(
        <ScrollView style={styles.mainViewFeedbacks}>
            <View style={styles.intro}>
                <Text style={styles.feedbacksText}>Please fill out this form to help us determine  which feedbacks best suits your child case.</Text>
            </View>
            <View style={styles.mainFormFeedbacks}>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>What is the name of the activity you tried?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>On a scale of 1-10, how helpful was the activity in supporting your child's needs?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Would you recommend this activity to other parents of children with special needs?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>How easy was the activity to set up and implement?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Did you face any challenges when trying to do the activity with your child? If yes, please explain.</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Do you have any additional comments or feedback about the activity or the application's recommendations in general?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <TouchableOpacity style={styles.button1} >
                 <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};