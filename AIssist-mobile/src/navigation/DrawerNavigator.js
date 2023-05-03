import React from 'react';
import {View, Image} from "react-native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import CommunityScreen from '../screens/Community';
import ActivitiesScreen from '../screens/Activities';
import FeedbacksScreen from '../screens/Feedbacks';
import QuestionsScreen from '../screens/Questions';
import SpecialistsScreen from '../screens/Specialists';
import { colors } from '../constants/Palette';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{

    return (
        <Drawer.Navigator initialRouteName="Community"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: colors.primary_1 },
          headerTintColor: "#FFFFFF",
          drawerStyle: { backgroundColor: "#FFFFFF" },
          drawerActiveBackgroundColor: colors.primary_1,
          drawerActiveTintColor: "#FFFFFF",
          drawerInactiveTintColor: '#000',
        }}>
          <Drawer.Screen name="Community" component={CommunityScreen} />
          <Drawer.Screen name="Specialists" component={SpecialistsScreen} />
          <Drawer.Screen name="Questions" component={QuestionsScreen} />
          <Drawer.Screen name="Activities" component={ActivitiesScreen} />
          <Drawer.Screen name="Feedbacks" component={FeedbacksScreen} />
        </Drawer.Navigator>
      );
};
export default DrawerNavigator;
