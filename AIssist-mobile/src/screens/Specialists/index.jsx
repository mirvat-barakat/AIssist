import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, Image, ScrollView,  Linking } from 'react-native';
import styles from './styles';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SpecialistsScreen() {

    const[specialists, setSpecialists]= useState([]);
    // const token = AsyncStorage.getItem("token");

    const getSpecialists = async () => {
        // const token = await AsyncStorage.getItem("token");
        const token = localStorage.getItem("token");
        const config = {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
          url: 'http://192.168.1.6:8000/api/v0.0.1/specialists',
        };
    
        try {
          const res = await axios(config);
    
          if (res.data.status == "success") {
            setSpecialists(res.data.specialists);
            console.log(res.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getSpecialists();
      }, []);

      return(
        <SafeAreaView >
          <ScrollView style={styles.scroll}>
            <View style={styles.main}>
                <View style={styles.mainSpecialistView}>
                    <View >
                       {specialists.map(specialist=> (
                        <View style={styles.specialistView}>
                        <View key={specialist.id}>
                          <View style={styles.card} >
                             <Image style={styles.profilePhoto} source={{uri:specialist.profile_picture}}></Image>
                             <View style={styles.specialistInfo}>
                                <Text style={styles.specialistName}>{specialist.name}</Text>
                                <Text>{specialist.category}</Text>
                                <Text>{specialist.speciality}</Text>
                                <Text><Icon name="map-marker" size={25} color="#CCCCCC" />{specialist.Location}</Text>
                             </View> 
                          </View> 
                          <View style={styles.call}>
                            <TouchableOpacity onPress={() =>Linking.openURL(`tel:${specialist.whatsapp_number}`)}>
                                <Icon name="phone" size={25} color="#F08080" style={styles.callIcon}/>
                            </TouchableOpacity>
                            <Text style={styles.phone}>{specialist.phone_number}</Text>
                            <TouchableOpacity onPress={() =>Linking.openURL(
                                    "http://api.whatsapp.com/send?phone=961" + specialist.phone_number)}>
                                        <Icon name="whatsapp" size={25} color="#25D366" />
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
};