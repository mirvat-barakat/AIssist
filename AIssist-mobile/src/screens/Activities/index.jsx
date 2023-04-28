import React from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';

export default function ActivitiesScreen() {


    return(
        <SafeAreaView style={styles.mainView}>
            <Header/>
            <View style={styles.mainFormActivities}>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> Name</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> Age</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> Gender</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> Diagnosis</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> Medications</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> What are your child's interests?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> Is there anything else you'd like us <br></br> to know about your child?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <TouchableOpacity style={styles.button} >
                 <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};