import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import OrderScreen from '../screens/BottomTabScreen/OrderScreen';
import AllOrderScreen from '../screens/BottomTabScreen/OrderScreen/AllOrders';
import NewOrderScreen from '../screens/BottomTabScreen/OrderScreen/NewOrder';
import PendingOrderScreen from '../screens/BottomTabScreen/OrderScreen/PendingOrder';
import OrderHistoryScreen from '../screens/BottomTabScreen/OrderScreen/OrderHistory';
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
      <Stack.Screen name="NewOrders" component={NewOrderScreen} />
      <Stack.Screen name="PendingOrder" component={PendingOrderScreen} />
      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
      <Stack.Screen name="OrdersContent" component={OrdersContent} />

    </Stack.Navigator>
  );
};

export default OrderStackNavigator;
