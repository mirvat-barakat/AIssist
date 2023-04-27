import React from 'react';
import { Text, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import Header1 from '../../components/Header1';
import { colors } from '../../constants/Palette';



const MyPage = () => {

    
    const handleBackButtonPress = () => {
      // handle back button press
    };
  
    return (
      <View>
        <Header1 title="Comments" backgroundColor='#F08080'  onPressBackButton={handleBackButtonPress} />
      </View>
    );
  };
  
  export default MyPage;