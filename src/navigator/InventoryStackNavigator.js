import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import InventoryScreen from '../screens/BottomTabScreen/InventoryScreen';

const InventoryStackNavigator = () => {
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
      <Stack.Screen name="Inventory" component={InventoryScreen} />
    </Stack.Navigator>
  );
};

export default InventoryStackNavigator;
