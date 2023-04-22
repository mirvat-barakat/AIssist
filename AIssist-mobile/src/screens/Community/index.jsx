import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';

export default function CommunityScreen() {
    const[postContent,setPostContent]=useState('');
    return(
        <SafeAreaView>
            <Header/>
            <View style={styles.main}>
                <Text style={styles.Heading}>Community</Text>
                <View style={styles.TextInputView}>
                    <TextInput value={postContent} onChangeText={(val)=>setPostContent(val)} multiline={true}
        numberOfLines={20}
        placeholder="Enter your text here..." style={styles.TextInput}></TextInput>
                </View>
                
            </View>

        </SafeAreaView>
    );
}