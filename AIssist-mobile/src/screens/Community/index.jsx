import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CommunityScreen({ navigation }) {
    const [posts, setFeed]= useState([]);
    const [liked, setLiked] = useState(false); 
    const [content, setContent] = useState('');
    const [postId, setPostId] = useState(null);
    const [likedPosts, setLikedPosts] = useState([]);
    const[likesCount, setLikesCount]= useState('');

    const handleSharePost= async(e) => {
      const token = await AsyncStorage.getItem("token");
      e.preventDefault();
      axios.post('http://192.168.1.6:8000/api/v0.0.1/community/posts', {
          'content': content,
      }, {
          headers: {
              'content-type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}` 
          }
      })
      .then(response => {
          if (response.data.status == "success"){
              refreshFeed();
              setContent(''); 
          }
      })
      .catch(error => {
          console.log(error);
      });
  };

  const refreshFeed = async () => {
    const token = await AsyncStorage.getItem("token");
    const config = {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
      url: 'http://192.168.1.6:8000/api/v0.0.1/community/posts',
    };
  
    try {
      const res = await axios(config);
  
      if (res.data.status === "success") {
        setFeed(res.data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  

      const handleLike = async (postId) => {
        const token = await AsyncStorage.getItem("token");
        try {
          setPostId(postId);
          if (likedPosts.includes(postId)) {
            await fetch('http://192.168.1.6:8000/api/v0.0.1/like/'+ postId, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                 'Authorization': `Bearer ${token}` 
              },
            });
            setLikedPosts(likedPosts.filter((id) => id !== postId));
          }else {
            await fetch('http://192.168.1.6:8000/api/v0.0.1/posts/'+postId+'/likes', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}` 
              },
              });
              setLikedPosts([...likedPosts, postId]);
        }
        
        setLiked(!liked);
      }catch (error) {
        console.error('Failed to toggle like:', error);
      }
    } 


    const getPosts = async () => {
      const token = await AsyncStorage.getItem("token");
      const config = {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        url: 'http://192.168.1.6:8000/api/v0.0.1/community/posts',
      };
  
      try {
        const res = await axios(config);
  
        if (res.data.status === "success") {
          const postsWithLikesCount = await Promise.all(res.data.posts.map(async (post) => {
            const likesRes = await axios({
              method: "GET",
              headers: { Authorization: `Bearer ${token}` },
              url: `http://192.168.1.6:8000/api/v0.0.1/post/${post.id}/likes`,
            });
    
            if (likesRes.data.status === "success") {
              return { ...post, likesCount: likesRes.data.like_count };
            }
    
            return post;
          }));
    
          setFeed(postsWithLikesCount);
          console.log(postsWithLikesCount);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getPosts();
    }, []);
    
    const getPostLikes = async () => {
      const token = await AsyncStorage.getItem("token");
      const postId = await AsyncStorage.getItem('postId');
      const config = {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        url: 'http://192.168.1.6:8000/api/v0.0.1/post/'+postId+'/likes',
      };
  
      try {
        const res = await axios(config);
  
        if (res.data.status == "success") {
          setLikesCount(res.data.like_count);
          console.log(res.data.like_count);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getPostLikes();
    }, []);


      return(
          <ScrollView>
            <View style={styles.main}>
                <View style={styles.TextInputView}>
                    <TextInput onChangeText={text => setContent(text)}
                  setContent={setContent}
                  value={content} multiline={true}
                       placeholder="Enter your text here..." style={styles.TextInput}>
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
                          <Text>{post.likesCount}</Text>
                          </View>
                          <View>
                          <TouchableOpacity style={styles.commentButton} >
                            <Text style={styles.commentButtonText} title="Open Comments" onPress={() => {
                                AsyncStorage.setItem('postId', JSON.stringify(post.id));
                                console.log(post.id);
                                navigation.navigate('Comments');
                              }} >Comments
                            </Text>
                          </TouchableOpacity>
                          </View>
                        </View>
                       </View>
                       ))}
                    </View>
                </View>
                </View>
                </ScrollView>
    );
}