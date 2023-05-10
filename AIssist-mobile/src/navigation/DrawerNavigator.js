import React from 'react';
import {View, Image} from "react-native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import CommunityScreen from '../screens/Community';
import ActivitiesScreen from '../screens/Activities';
import FeedbacksScreen from '../screens/Feedback';
import QuestionsScreen from '../screens/Questions';
import SpecialistsScreen from '../screens/Specialists';
import { colors } from '../constants/Palette';
import AppStack from './RootStack';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        source={require('../../assets/images/Logo.png')}
        style={{ width: 150, height: 145, marginBottom: 20, alignSelf:'center', marginTop:10}}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () =>{
  
    return (

        <Drawer.Navigator initialRouteName="Community"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: colors.primary_1 },
          headerTintColor: "#FFFFFF",
          drawerStyle: { backgroundColor: colors.primary_1 },
          drawerActiveBackgroundColor: colors.primary_3,
          drawerActiveTintColor: "#FFFFFF",
          drawerInactiveTintColor: '#000',
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Feed" component={CommunityScreen} />
          <Drawer.Screen name="Specialists" component={SpecialistsScreen} />
          <Drawer.Screen name="Questions" component={QuestionsScreen} />
          <Drawer.Screen name="Activities" component={ActivitiesScreen} />
          <Drawer.Screen name="Feedbacks" component={FeedbacksScreen} />
        </Drawer.Navigator>
      );
};
export default DrawerNavigator;
