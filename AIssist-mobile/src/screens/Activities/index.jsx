import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ActivitiesScreen() {

    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [Diagnosis, setDiagnosis]= useState('');
    const [medications, setMedications] = useState('');
    const [interest, setInterest] = useState('');
    const [notes, setNotes] = useState('');
    const [things_have_tried, setThingSHaveTried] = useState('');
    const[activities, setActivities]= useState([]);
    // const token = AsyncStorage.getItem("token");
    const token = localStorage.getItem("token");

    const handleGenerateActivities= ()=>{
        // const token = AsyncStorage.getItem("token");
        axios.post('http://192.168.1.6:8000/api/v0.0.1/activities', {
          'age': age,
          'gender':gender,
          'Diagnosis': Diagnosis,
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
            console.log(response);
            setActivities(response.data.activities);
      })
      .catch(error => {
          console.log(error);
      });
  };
//   useEffect(() => {
//     handleGenerateActivities();
//   }, []);


    return(
        <ScrollView style={styles.mainView}>
            <View style={styles.intro}>
                <Text style={styles.activitiesText}>Please fill out this form to help us determine  which activities best suits your child case.</Text>
            </View>
            <View style={styles.mainFormActivities}>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> Age</Text>
                 <TextInput
                  style={styles.input1}
                  onChangeText={text => setAge(text)}
                  setAge={setAge}
                  value={age}
                 />
                </View>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> Gender</Text>
                 <TextInput
                  style={styles.input1}
                  onChangeText={text => setGender(text)}
                  setGender={setGender}
                  value={gender}
                 />
                </View>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> Diagnosis</Text>
                 <TextInput
                  style={styles.input1}
                  onChangeText={text => setDiagnosis(text)}
                  setDiagnosis={setDiagnosis}
                  value={Diagnosis}
                 />
                </View>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> Medications</Text>
                 <TextInput
                  style={styles.input1}
                  onChangeText={text => setMedications(text)}
                  setMedications={setMedications}
                  value={medications}
                 />
                </View>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> What are your child's interests?</Text>
                 <TextInput
                  style={styles.input1}
                  onChangeText={text => setInterest(text)}
                  setInterest={setInterest}
                  value={interest}
                 />
                </View>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> Is there any activities you have tried before?</Text>
                 <TextInput
                  style={styles.input1}
                  onChangeText={text => setThingSHaveTried(text)}
                  setThingSHaveTried={setThingSHaveTried}
                  value={things_have_tried}
                 />
                </View>
                <View style={styles.formActivities}>
                <Text style={styles.inputLabel1}> Is there anything else you'd like us  to know about your child?</Text>
                 <TextInput
                  style={styles.input1}
                  onChangeText={text => setNotes(text)}
                  setNotes={setNotes}
                  value={notes}
                 />
                </View>
                <TouchableOpacity style={styles.button1} >
                 <Text style={styles.buttonText} onPress={handleGenerateActivities}>Save</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.generatedActivities}>
                       {activities.map(activity=> (
                        <View style={styles.activityView}>
                        <View key={activity.id}>
                          <View style={styles.card} >
                             <View style={styles.specialistInfo}>
                                <Text style={styles.specialistName}>{activity.name}</Text>
                                <Text >{activity.description}</Text>
                          </View>
                             </View>
                          </View> 
                        </View>
                       ))}
                    </View>
        </ScrollView>
    )
};