import React from 'react';
import { View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import HomeScreen from './src/screens/Home';

function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    // <SafeAreaView>
    //   <HomeScreen/>
    // </SafeAreaView>
  );
}

export default App;
