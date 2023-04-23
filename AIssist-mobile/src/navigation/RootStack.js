import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CommunityScreen from '../screens/Community';
import CommentScreen from '../screens/comments';


const RootStack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Community" component={CommunityScreen} />
        <RootStack.Screen name="Comments" component={CommentScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;