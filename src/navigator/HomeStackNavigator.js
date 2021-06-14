import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import HomeScreen from '../screens/BottomTabScreen/HomeScreen';
import LoginScreen from '../screens/Auth/Login';

const HomeStackNavigator = () => {
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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
