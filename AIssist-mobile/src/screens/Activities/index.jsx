import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import axios from 'axios';

export default function ActivitiesScreen() {

    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [diagnosis, setDiagnosis]= useState('');
    const [medications, setMedications] = useState('');
    const [interest, setInterest] = useState('');
    const [notes, setNotes] = useState('');
    const [things_have_tried, setThingSHaveTried] = useState('');
    const token = localStorage.getItem("token");

    const handleGenerateActivities= (e)=>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/v0.0.1/activities', {
          'age': age,
          'gender':gender,
          'diagnosis': diagnosis,
          'medications':medications,
          'interest': interest,
          'notes':notes,
          'things_have_tried': things_have_tried,
          
      }, {
          headers: {
              'content-type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'bearer ' + token
          }
      })
      .then(response => {
          if (response.data.status == "success"){
            console.log(response)
          }
      })
      .catch(error => {
          console.log(error);
      });
  };


    return(
        <ScrollView style={styles.mainView}>
            <Header/>
            <View>
                <Text style={styles.activitiesTitle}>Activities</Text>
                <Text style={styles.activitiesText}>Please fill out this form to help us determine  which activities best suits your child case.</Text>
            </View>
            <View style={styles.mainFormActivities}>
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
                <Text style={styles.inputLabel1}> Is there any activities you have tried before?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> Is there anything else you'd like us  to know about your child?</Text>
                 <TextInput
                  style={styles.input1}
                 />
                </View>
                <TouchableOpacity style={styles.button1} >
                 <Text style={styles.buttonText} onPress={handleGenerateActivities}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};