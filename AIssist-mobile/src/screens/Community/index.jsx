import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, Image, ScrollView } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CommunityScreen({ navigation }) {
    const[postContent,setPostContent]= useState('');
    const[posts, setFeed]= useState([]);
    const token = localStorage.getItem("token");
    // const [token, setToken] = useState('');
    const [likedPosts, setLikedPosts] = useState([]); 

      const handleLike = async (postId, index) => {
        try {
          if (likedPosts[index]) {
            await fetch('http://127.0.0.1:8000/api/v0.0.1/like/${postId}', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + token
              },
            });
          }else {
            await fetch('http://127.0.0.1:8000/api/v0.0.1/posts/${postId}/likes', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + token
              },
              });

        }
        const updatedLikedPosts = [...likedPosts];
        updatedLikedPosts[index] = !likedPosts[index];
        setLikedPosts(updatedLikedPosts);
      }catch (error) {
        console.error('Failed to toggle like:', error);
      }
    } 

    const getPosts = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/v0.0.1/community/posts',
        headers: {
          'content-type': 'application/json',
          'Accept' : 'application/json',
          'Authorization': 'bearer ' + token
        },
      };

      // useEffect(() => {
      //   AsyncStorage.getItem('token')
      //     .then((value) => {
      //       if (value !== null) {
      //         setToken(value);
      //       }
      //     })
      //     .catch((error) => console.error('Error getting token from async storage:', error));
      // },[]);
  
      useEffect(() => {
        axios.request(getPosts)
            .then(response => {
                console.log(response);
                setFeed(response.data.posts);
                setLikedPosts(Array(response.data.posts.length).fill(false));
            })
            .catch(function (error) {
                console.error();
            });
      },[token]);
      return(
        <SafeAreaView>
          <ScrollView>
            <Header/>
            <View style={styles.main}>
                <Text style={styles.Heading}>Community</Text>
                <View style={styles.TextInputView}>
                    <TextInput value={postContent} onChangeText={(val)=>setPostContent(val)} multiline={true}
                       numberOfLines={20} placeholder="Enter your text here..." style={styles.TextInput}>
                    </TextInput>
                    <TouchableOpacity style={styles.shareButton} >
                      <Text style={styles.shareButtonText}>Share</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainPostView}>
                    <View >
                       {posts.map((post, index) => (
                        <View style={styles.postView}>
                        <View key={post.id} style={styles.postTitle}>
                          <View style={styles.imageView}>
                             <Image style={styles.profilePhoto} source={{uri:post.profile_picture}}></Image>
                             <Text style={styles.username} numberOfLines={3} ellipsizeMode="tail">{post.name}</Text>
                          </View>
                        </View>
                        <View style={styles.postContent}>
                            <Text>{post.content}</Text>
                        </View>
                        <View style={styles.actions}>
                          <View>
                          <TouchableOpacity onPress={() => handleLike(post.id, index)}><Ionicons name="heart-outline" size={24} style={[styles.icon, { color: likedPosts[index] ? 'red' : 'black' }]} /></TouchableOpacity>
                          </View>
                          <View>
                          <TouchableOpacity style={styles.commentButton} >
                            <Text style={styles.commentButtonText} title="Open Comments" onPress={() => navigation.navigate('Comments')} >Comments</Text>
                          </TouchableOpacity>
                          </View>
                        </View>
                       </View>
                       ))}
                    </View>
                </View>
                </View>
                </ScrollView>
        </SafeAreaView>
    );
}