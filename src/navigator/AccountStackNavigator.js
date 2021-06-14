import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import AccountScreen from '../screens/BottomTabScreen/AccountScreen';
import ProfileScreen from '../screens/BottomTabScreen/AccountScreen/Profile';

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        mode: 'modal',
      }}
      options={{
        animation: 'spring',
        gestureDirection: 'vertical',
      }}>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
