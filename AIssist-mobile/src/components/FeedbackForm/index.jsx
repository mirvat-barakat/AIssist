import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';

const FeedbackForm = () => {

    return(
            <View style={styles.mainFormFeedbacks}>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>How satisfied were you with the activities generated for you?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Were the activities appropriate for your child's age and gender?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Were the activities appropriate for your child's diagnosis?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Did you find the activities interesting?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Did you try any of the activities suggested to your child?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Were there any activities that you were unable to do?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>If you answered "Yes" to the previous question, please specify which activities you were unable to do and why:</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>What suggestions do you have to improve the activities generated for you?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Any other comments or feedback you would like to share:</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <TouchableOpacity style={styles.button1} >
                 <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
    )
};

export default FeedbackForm;