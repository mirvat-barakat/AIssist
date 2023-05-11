import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsAuthenticated(!!token);
    };
    checkAuthentication();
  }, []);


  return (
    // <NavigationContainer>
    //   {isAuthenticated ? <DrawerNavigator /> : <AuthStack />}
    // </NavigationContainer>

  <NavigationContainer>
     <AuthStack />
  </NavigationContainer>
    
  );
}

export default App;
