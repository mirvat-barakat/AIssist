import React, { useState } from 'react';
import styles from './styles';

export default function SpecialistsScreen() {

    const[specialists, setSpecialists]= useState([]);
    const token = AsyncStorage.getItem("token");

    const getSpecialists = async () => {
        // const token = await AsyncStorage.getItem("token");
        const token = localStorage.getItem("token");
        const config = {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
          url: 'http://192.168.1.6:8000/api/v0.0.1/specialist',
        };
    
        try {
          const res = await axios(config);
    
          if (res.data.status == "success") {
            setFeed(res.data.posts);
            console.log(res.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getSpecialists();
      }, []);
};