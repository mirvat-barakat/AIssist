import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import HomeScreen from './src/screens/Home';

function App() {
  return (
    // <NavigationContainer>
    //   <AuthStack />
    // </NavigationContainer>
    <View>
      <HomeScreen/>
    </View>
  );
}

export default App;
