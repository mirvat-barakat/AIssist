import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

const CommentBox = ({ onComment }) => {
  const [comment, setComment] = useState('');
  const [inputHeight, setInputHeight] = useState(40);

  const handleCommentChange = (text) => {
    setComment(text);
    setInputHeight(Math.max(40, text.split('\n').length * 10));
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { height: inputHeight }]}
        multiline
        placeholder="Write a comment..."
        value={comment}
        onChangeText={handleCommentChange}
      />
      <TouchableOpacity style={styles.button} >
        <Feather name="send" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CommentBox;