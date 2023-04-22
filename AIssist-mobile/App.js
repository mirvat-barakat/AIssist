import React from 'react';
import { View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import HomeScreen from './src/screens/Home';
import CommunityScreen from './src/screens/Community';

function App() {
  return (
    // <NavigationContainer>
    //   <AuthStack />
    // </NavigationContainer>
    <SafeAreaView>
      <CommunityScreen/>
    </SafeAreaView>
  );
}

export default App;
