import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [inputHeight, setInputHeight] = useState(40);
  const [content, setContent] = useState('');
  // const token = AsyncStorage.getItem("token");
  // const postId = AsyncStorage.getItem('postId');
  const token = localStorage.getItem("token");
  const postId = localStorage.getItem('postId');

  const handleCommentChange = (text) => {
    setComment(text);
    setInputHeight(Math.max(40, text.split('\n').length * 10));
  };

  const handleAddComment= (e) => {

    e.preventDefault();
    axios.post('http://192.168.1.6:8000/api/v0.0.1/posts/'+postId+'/comments', {
        'content': content,
    }, {
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'bearer ' + token
        }
    })
    .then(response => {
      console.log(response);
        if (response.data.status == "success"){
            alert("Comment added");
        }
    })
    .catch(error => {
        console.log(error);
    });
};



  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { height: inputHeight }]}
        multiline
        placeholder="Write a comment..."
        content={content}
        setContent={setContent}
        // onChangeText={handleCommentChange}
        onChangeText={text => setContent(text)}
      />
      <TouchableOpacity style={styles.button} >
        <Feather name="send" size={24} color="white" onPress={handleAddComment} />
      </TouchableOpacity>
    </View>
  );
};

export default CommentBox;