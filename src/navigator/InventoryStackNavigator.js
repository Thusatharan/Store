import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import InventoryScreen from '../screens/BottomTabScreen/InventoryScreen';
import AllInventoryScreen from '../screens/BottomTabScreen/InventoryScreen/AllInventory';
import LowStockAlertScreen from '../screens/BottomTabScreen/InventoryScreen/LowStockAlert';
import OutOfStockScreen from '../screens/BottomTabScreen/InventoryScreen/OutOfStock';
import ShortDateAlertScreen from '../screens/BottomTabScreen/InventoryScreen/ShortDateAlert';

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
      <Stack.Screen name="AllInventory" component={AllInventoryScreen} />
      <Stack.Screen name="LowStockAlert" component={LowStockAlertScreen} />
      <Stack.Screen name="OutOfStock" component={OutOfStockScreen} />
      <Stack.Screen name="ShortDateAlert" component={ShortDateAlertScreen} />
    </Stack.Navigator>
  );
};

export default InventoryStackNavigator;
