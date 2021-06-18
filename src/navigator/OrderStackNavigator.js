import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import OrderScreen from '../screens/BottomTabScreen/OrderScreen';
import AllOrderScreen from '../screens/BottomTabScreen/OrderScreen/AllOrders';
import ProcessingOrderScreen from '../screens/BottomTabScreen/OrderScreen/Processing';
import UpComingOrderScreen from '../screens/BottomTabScreen/OrderScreen/UpComing';
import CompletedOrderScreen from '../screens/BottomTabScreen/OrderScreen/Completed';
import OrdersContent from '../screens/BottomTabScreen/OrderScreen/AllOrders/ordersContent';

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
      <Stack.Screen name="Processing" component={ProcessingOrderScreen} />
      <Stack.Screen name="UpComing" component={UpComingOrderScreen} />
      <Stack.Screen name="Completed" component={CompletedOrderScreen} />
      <Stack.Screen name="OrdersContent" component={OrdersContent} />
    </Stack.Navigator>
  );
};

export default OrderStackNavigator;
