import React, {useState,  useEffect} from 'react';
import { Text, TextInput, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function QuestionsScreen() {

        const [Question, setQuestion] = useState('');
        const[Answer, setAnswer] =useState('');
        const [answerDisplay, setAnswerDisplay] = useState('');
    
        const handleGenerateAnswers= async(e)=>{
            e.preventDefault();
            const token = await AsyncStorage.getItem("token");
            axios.post('http://192.168.1.6:8000/api/v0.0.1/answers', {
              'Question': Question,
          }, {
              headers: {
                  'content-type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': 'bearer ' + token
              }
          })
          .then(response => {
                console.log(response)
                setAnswer(response.data.data);
          })
          .catch(error => {
              console.log(error);
          });
    };

    useEffect(() => {
        if (Answer && Answer.length > 0) {
        let i = 0;
        setAnswerDisplay(Answer.charAt(0)); 
        const timer = setInterval(() => {
            if (i < Answer.length) {
                setAnswerDisplay(prevDisplay => prevDisplay + Answer.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }
    }, [Answer]);


    return(
        <ScrollView style={styles.mainViewQuestions}>
            <View style={styles.intro}>
              <Image style={styles.questionIcon} source={require('../../../assets/images/QA.png')}/>
              <Text style={styles.heading}>Welcome!</Text>
              <Text style={styles.questionsText}>Ask any questions you have about your child's condition and we'll do our best to help you find the answers you need.</Text>
            </View>
            <View style={styles.container}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your question"
                multiline
                onChangeText={text => setQuestion(text)}
                  setQuestion={setQuestion}
                  Question={Question}
                />
            </View>
            <TouchableOpacity style={styles.shareButton} >
                      <Text style={styles.shareButtonText} onPress={handleGenerateAnswers}>Search</Text>
            </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.answer}>{answerDisplay}</Text>
            </View>
        </ScrollView>
    )
};