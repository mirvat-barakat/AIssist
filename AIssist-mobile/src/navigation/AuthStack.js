import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import CommunityScreen from '../screens/Community';
import CommentsScreen from '../screens/comments';
import DrawerNavigator from './DrawerNavigator';
import LaunchScreen from '../screens/Launch';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Launch" component={LaunchScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="Comments" component={CommentsScreen} options={{ headerShown: false }}/>
        
      </Stack.Navigator>
    );
  };

export default AuthStack;