import React, {useState, useEffect} from 'react';
import { Text, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';
import Header1 from '../../components/Header1';
import CommentBox from '../../components/CommentBox';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const CommentsPage = () => {
  const[comments, setComments]= useState([]);
  const token = AsyncStorage.getItem("token");
  const postId = AsyncStorage.getItem('postId');


  const getComments = async () => {
    const token = await AsyncStorage.getItem("token");
    const postId = await AsyncStorage.getItem('postId');
    const config = {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
      'Accept' : 'application/json', },
      url: 'http://192.168.1.6:8000/api/v0.0.1/posts/'+postId+'/comments',
    };
    try {
      const res = await axios(config);

      if (res.data.status == "success") {
        setComments(res.data.comments);
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    axios.request(getComments)
        .then(response => {
            console.log(response);
            setComments(response.data.comments);
        })
        .catch(function (error) {
            console.error();
        });
  },[token, postId]);
  
    return (
      <View style={styles.commentView}>
        <Header1 title="Comments" backgroundColor='#F08080'  onPressBackButton={() => navigation.navigate('Comments')} />
        <View style={styles.mainView}>
          <View>
          {comments.map(comment => (
            <View key={comment.id} style={styles.mainCommentView}>
              <Image style={styles.profilePhoto} source={{uri:comment.profile_picture}}></Image>
              <View style={styles.comment}>
                <Text style={styles.username} >{comment.name}</Text>
                <Text style={styles.commentContent}>{comment.content}</Text>
              </View>
            </View>
          ))}
          </View>
        </View>
        <View style={styles.box}>
              <CommentBox />
        </View>
      </View>
    );
  };
  
  export default CommentsPage;