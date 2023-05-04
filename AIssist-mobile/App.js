import React, {useState, useEffect} from 'react';
import { View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import AppStack from './src/navigation/RootStack';
import HomeScreen from './src/screens/Home';
import CommunityScreen from './src/screens/Community';
import ActivitiesScreen from './src/screens/Activities';
import FeedbacksScreen from './src/screens/Feedbacks';
import QuestionsScreen from './src/screens/Questions';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    };
    checkAuthentication();
  }, []);


  return (
    <NavigationContainer>
      {isAuthenticated ? <DrawerNavigator /> : <AuthStack />}
    </NavigationContainer>
    // <NavigationContainer>
    //     <AuthStack />
    // </NavigationContainer>
    // <NavigationContainer>
    //     <DrawerNavigator />
    // </NavigationContainer>

    
      // <AppStack/>
      
      // <NavigationContainer>
      //   < DrawerNavigator/>
      // </NavigationContainer>
      // <CommunityScreen/>
      // <ActivitiesScreen />
      // <RootStack/>
    
    // <SafeAreaView>
    //   <CommunityScreen/>
    // </SafeAreaView>

    
  );
}

export default App;
