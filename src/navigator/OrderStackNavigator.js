import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import OrderScreen from '../screens/BottomTabScreen/OrderScreen';

import AllOrderScreen from '../screens/BottomTabScreen/OrderScreen/AllOrders';
import AllOrderDetailScreen from '../screens/BottomTabScreen/OrderScreen/AllOrders/Details';

import ProcessingOrderScreen from '../screens/BottomTabScreen/OrderScreen/Processing';
import UpComingOrderScreen from '../screens/BottomTabScreen/OrderScreen/UpComing';

import CompletedOrderScreen from '../screens/BottomTabScreen/OrderScreen/Completed';
import CompletedDetailsScreen from '../screens/BottomTabScreen/OrderScreen/Completed/Details';

import OrdersDetailsScreen from '../screens/BottomTabScreen/OrderScreen/Details';

const OrderStackNavigator = () => {
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
      <Stack.Screen name="Orders" component={OrderScreen} />
      
      <Stack.Screen name="AllOrders" component={AllOrderScreen} />
      <Stack.Screen name="All Order Detail" component={AllOrderDetailScreen} />

      <Stack.Screen name="Processing" component={ProcessingOrderScreen} />
      <Stack.Screen name="UpComing" component={UpComingOrderScreen} />

      <Stack.Screen name="Completed" component={CompletedOrderScreen} />
      <Stack.Screen
        name="Completed Detail"
        component={CompletedDetailsScreen}
      />

      <Stack.Screen name="Orders Details" component={OrdersDetailsScreen} />
    </Stack.Navigator>
  );
};

export default OrderStackNavigator;
