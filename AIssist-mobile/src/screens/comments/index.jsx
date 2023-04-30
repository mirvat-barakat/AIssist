import React from 'react';
import { Text, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import Header1 from '../../components/Header1';
import { colors } from '../../constants/Palette';
import CommentBox from '../../components/CommentBox';



const CommentsPage = () => {
  const[comments, setComments]= useState([]);


  const getComments = {
    method: 'GET',
    url: 'http://127.0.0.1:8000/api/v0.0.1/posts/'+post.id+'/comments',
    headers: {
      'content-type': 'application/json',
      'Accept' : 'application/json',
      'Authorization': 'bearer ' + token
    },
  };

  useEffect(() => {
    axios.request(getComments)
        .then(response => {
            console.log(response);
            setComments(response.data.posts);
        })
        .catch(function (error) {
            console.error();
        });
  },[token]);

    
    const handleBackButtonPress = () => {
      // handle back button press
    };
  
    return (
      <View style={styles.commentView}>
        <Header1 title="Comments" backgroundColor='#F08080'  onPressBackButton={handleBackButtonPress} />
        <View style={styles.box}>
              <CommentBox  />
        </View>
      </View>
    );
  };
  
  export default CommentsPage;