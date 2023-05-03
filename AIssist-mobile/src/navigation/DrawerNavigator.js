import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CommunityScreen from '../screens/Community';
import ActivitiesScreen from '../screens/Activities';
import FeedbacksScreen from '../screens/Feedbacks';
import QuestionsScreen from '../screens/Questions';
import { colors } from '../constants/Palette';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{

    return (
        <Drawer.Navigator initialRouteName="Community"
         screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary_1,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Drawer.Screen name="Community" component={CommunityScreen} />
          <Drawer.Screen name="Activities" component={ActivitiesScreen} />
          <Drawer.Screen name="Feedbacks" component={FeedbacksScreen} />
          <Drawer.Screen name="Questions" component={QuestionsScreen} />
        </Drawer.Navigator>
      );
};
export default DrawerNavigator;
