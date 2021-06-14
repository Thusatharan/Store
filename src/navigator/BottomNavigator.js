import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';
import HomeStackNavigator from './HomeStackNavigator';
import AccountStackNavigator from './AccountStackNavigator';
import OrderStackNavigator from './OrderStackNavigator';
import InventoryStackNavigator from './InventoryStackNavigator';
import RevenueStackNavigator from './RevenueStackNavigator';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Inventory') {
            iconName = focused ? 'business' : 'business-outline';
          } else if (route.name === 'Revenue') {
            iconName = focused ? 'cash' : 'cash-outline';
          }

          return <Ionicons name={iconName} size={19} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        showLabel: true,
      }}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Account" component={AccountStackNavigator} />
      <Tab.Screen name="Orders" component={OrderStackNavigator} />
      <Tab.Screen name="Inventory" component={InventoryStackNavigator} />
      <Tab.Screen name="Revenue" component={RevenueStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
