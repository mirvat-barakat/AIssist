import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import FeedbackForm from '../../components/FeedbackForm';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FeedbacksScreen() {

    const[activities, setActivities]= useState([]);
    const [value, setValue] = React.useState('first');
    const [satisfaction, setSatisfaction] = useState('');
    const [age_gender, setAgeGender]= useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [interest, setInterest] = useState('');
    const [tried_activities, setTriedActivities] = useState('');
    const [unable_activities, setUnableActivities] = useState('');
    const[improvement_suggestions, setImprovementSuggestions]= useState('');
    const [other_feedback, setOtherFeedback] = useState('');

    const handleRegenerateActivities= async (e)=>{
        e.preventDefault();
        const token = await AsyncStorage.getItem("token");
        const formId = await AsyncStorage.getItem("formId");
        

        axios.post('http://192.168.1.6:8000/api/v0.0.1/regenerate/activities/'+formId, {

          'satisfaction': satisfaction ,
          'age_gender': age_gender , 
          'diagnosis': diagnosis ,
          'interest': interest , 
          'tried_activities': tried_activities ,
          'unable_activities': unable_activities ,
          'improvement_suggestions': improvement_suggestions ,
          'other_feedback': other_feedback ,  
          
      }, {
          headers: {
              'content-type': 'application/json',
              'Accept': 'application/json',
              Authorization: `Bearer ${token}`
          }
      })
      .then(response => {
            console.log(response);
            setActivities(response.data.activities);
        })
      .catch(error => {
          console.log(error);
      });
  }
  


    return(
        <ScrollView style={styles.mainView}>
            <View style={styles.intro}>
                <Text style={styles.activitiesText}>Please fill out this form to help us determine  which activities best suits your child case.</Text>
            </View>
            <View style={styles.mainFormFeedbacks}>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>How satisfied were you with the activities generated for you?</Text>
                <View>
                    <RadioButton.Group onValueChange={value => setSatisfaction(value)} value={satisfaction} setSatisfaction={setSatisfaction}>
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
                    <RadioButton.Group onValueChange={value => setAgeGender(value)} value={age_gender} setAgeGender={setAgeGender}>
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
                    <RadioButton.Group onValueChange={value => setDiagnosis(value)} value={diagnosis} setDiagnosis={setDiagnosis}>
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
                    <RadioButton.Group onValueChange={value => setInterest(value)} value={interest} setInterest={setInterest}>
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
                    <RadioButton.Group onValueChange={value => setTriedActivities(value)} value={tried_activities} setTriedActivities={setTriedActivities}>
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
                    <RadioButton.Group onValueChange={value => setUnableActivities(value)} value={unable_activities} setUnableActivities={setUnableActivities}>
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
                <Text style={styles.inputLabel1}>What suggestions do you have to improve the activities generated for you?</Text>
                 <TextInput
                  style={styles.input1}
                  onChangeText={text => setImprovementSuggestions(text)}
                  setImprovementSuggestions={setImprovementSuggestions}
                  value={improvement_suggestions}
                 />
                </View>
                <View style={styles.formFeedbacks}>
                <Text style={styles.inputLabel1}>Any other comments or feedback you would like to share:</Text>
                 <TextInput
                  style={styles.input1}
                  onChangeText={text => setOtherFeedback(text)}
                  setOtherFeedback={setOtherFeedback}
                  value={other_feedback}
                 />
                </View>
                <TouchableOpacity style={styles.button1} >
                 <Text style={styles.buttonText} onPress={handleRegenerateActivities}>Submit</Text>
                </TouchableOpacity>
            </View>
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