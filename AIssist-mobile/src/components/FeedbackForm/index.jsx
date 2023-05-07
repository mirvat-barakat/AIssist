import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from './styles';

const FeedbackForm = () => {
    const [value, setValue] = React.useState('first');

    return(
            <View style={styles.mainFormFeedbacks}>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>How satisfied were you with the activities generated for you?</Text>
                <View>
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="yes_all" />
                        <Text style={{marginTop: 8}}>Satisfied</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="yes_some" />
                        <Text style={{marginTop: 8}}>Neutral</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="no" />
                        <Text style={{marginTop: 8}}>Dissatisfied</Text>
                    </View>
                    </RadioButton.Group>
                </View>
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Were the activities appropriate for your child's age and gender?</Text>
                <View>
                    <RadioButton.Group onValueChange={value => set(value)} value={value}>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="yes_all" />
                        <Text style={{marginTop: 8}}>Yes</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="yes_some" />
                        <Text style={{marginTop: 8}}>No</Text>
                    </View>
                    </RadioButton.Group>
                </View>
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Were the activities appropriate for your child's diagnosis?</Text>
                <View>
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="yes_all" />
                        <Text style={{marginTop: 8}}>Yes</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="yes_some" />
                        <Text style={{marginTop: 8}}>No</Text>
                    </View>
                    </RadioButton.Group>
                </View>
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Did you find the activities interesting?</Text>
                <View>
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="yes_all" />
                        <Text style={{marginTop: 8}}>Yes</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="yes_some" />
                        <Text style={{marginTop: 8}}>No</Text>
                    </View>
                    </RadioButton.Group>
                </View>
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Did you try any of the activities suggested to your child?</Text>
                <View>
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="yes_all" />
                        <Text style={{marginTop: 8}}>Yes, I tried all of them</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="yes_some" />
                        <Text style={{marginTop: 8}}>Yes, I tried some of them</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="no" />
                        <Text style={{marginTop: 8}}>No, I didn't try any of them</Text>
                    </View>
                    </RadioButton.Group>
                </View>
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Were there any activities that you were unable to do?</Text>
                <View>
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="yes_all" />
                        <Text style={{marginTop: 8}}>Yes</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton value="yes_some" />
                        <Text style={{marginTop: 8}}>No</Text>
                    </View>
                    </RadioButton.Group>
                </View>
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