/**
 * @prettier
 *
 * File: DashboardStackNavigator.tsx
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AllNavStackParamList } from 'types/routes';
import { COMMON_STACK_CONFIG } from '../../contsants';
import {DashboardScreen,MoviesDetailsScreen,LoginScreen} from 'screens'

const DashboardStackNavigator = createStackNavigator<AllNavStackParamList>();

function DashboardStack() {
  return (
    <DashboardStackNavigator.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={COMMON_STACK_CONFIG}
    >
      <DashboardStackNavigator.Screen name="DashboardScreen" component={DashboardScreen} />
      <DashboardStackNavigator.Screen name="MoviesDetailsScreen" component={MoviesDetailsScreen} />
      <DashboardStackNavigator.Screen name="LoginScreen" component={LoginScreen} />
    </DashboardStackNavigator.Navigator>
  );
}

// export as default.
export default DashboardStack;
