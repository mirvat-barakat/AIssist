import React from 'react';
import { View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/RootStack';
import HomeScreen from './src/screens/Home';
import CommunityScreen from './src/screens/Community';
import ActivitiesScreen from './src/screens/Activities';

function App() {
  return (
    
      // <AppStack/>
      
      // <NavigationContainer>
      //   <AuthStack/>
      // </NavigationContainer>
      <ActivitiesScreen/>
      
    
    // <SafeAreaView>
    //   <CommunityScreen/>
    // </SafeAreaView>
  );
}

export default App;
