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
                <TextInput value={postContent} onChangeText={(val)=>setPostContent(val)}style={styles.TextInput}></TextInput>
            </View>

        </SafeAreaView>
    );
}