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
    const [liked, setLiked] = useState(); 
    const [title, setTitle] = useState('');
      const [content, setContent] = useState('');
      const [postId, setPostId] = useState(null);
      const [likedPosts, setLikedPosts] = useState([]);

    const handleSharePost= (e) => {
      const [title, setTitle] = useState('');
      const [content, setContent] = useState('');

      e.preventDefault();
      axios.post('http://127.0.0.1:8000/api/v0.0.1/community/posts', {
          'content': content,
          'title':title,
      }, {
          headers: {
              'content-type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'bearer ' + token
          }
      })
      .then(response => {
          if (response.data.status == "success"){
              alert("Post Shared");
          }
      })
      .catch(error => {
          console.log(error);
      });
  };
  

      const handleLike = async (postId) => {
        try {
          setPostId(postId);
          if (likedPosts.includes(postId)) {
            await fetch('http://127.0.0.1:8000/api/v0.0.1/like/'+ postId, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + token
              },
            });
            setLikedPosts(likedPosts.filter((id) => id !== postId));
          }else {
            await fetch('http://127.0.0.1:8000/api/v0.0.1/posts/'+postId+'/likes', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + token
              },
              });
              setLikedPosts([...likedPosts, postId]);
        }
        
        setLiked(!liked);
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
          <View>
            <Header/>
            <View style={styles.main}>
                <Text style={styles.Heading}>Community</Text>
                <View style={styles.TextInputView}>
                    <TextInput onChangeText={text => setContent(text)}
                  setContent={setContent}
                  content={content} multiline={true}
                       numberOfLines={20} placeholder="Enter your text here..." style={styles.TextInput}>
                    </TextInput>
                    <TouchableOpacity style={styles.shareButton} >
                      <Text style={styles.shareButtonText} onPress={handleSharePost}>Share</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainPostView}>
                    <View >
                       {posts.map(post => (
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
                          <TouchableOpacity  onPress={() => handleLike(post.id)}><Ionicons name="heart-outline" size={24} style={[styles.icon, { color: likedPosts.includes(post.id) ? 'red' : 'black' }]}  /></TouchableOpacity>
                          </View>
                          <View>
                          <TouchableOpacity style={styles.commentButton} >
                            <Text style={styles.commentButtonText} title="Open Comments" onPress={() => navigation.navigate('Comments')} >Comments</Text>
                          </TouchableOpacity>
                          </View>
                          <View>
                          <TouchableOpacity style={styles.commentButton} >
                            <Text style={styles.commentButtonText} title="Open Comments" onPress={() => navigation.navigate('Comments')} >Reply</Text>
                          </TouchableOpacity>
                          </View>
                        </View>
                       </View>
                       ))}
                    </View>
                </View>
                </View>
                </View>
        </SafeAreaView>
    );
}