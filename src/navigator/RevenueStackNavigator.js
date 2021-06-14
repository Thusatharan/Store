import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import RevenueScreen from '../screens/BottomTabScreen/RevenueScreen';
import BankDetails from '../screens/BottomTabScreen/RevenueScreen/BankDetails';


const RevenueStackNavigator = () => {
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
      <Stack.Screen name="Revenue" component={RevenueScreen} />
      <Stack.Screen name="BankDetails" component={BankDetails} />

    </Stack.Navigator>
  );
};

export default RevenueStackNavigator;
