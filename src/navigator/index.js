import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomNavigator from './BottomNavigator';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="TapBar" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default Navigator;
