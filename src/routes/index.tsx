/**
 * @prettier
 */

import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AllNavStackParamList } from 'types/routes';
import { COMMON_STACK_CONFIG } from './contsants';
import { DashboardStackNavigator } from './navigators/StackNavigators';
import * as NavigatorService from './NavigatorService';

export * from './navigators/StackNavigators';
export * from './contsants';

// create root stack navigator.
const RootStackNavigator = createStackNavigator<AllNavStackParamList>();

/**
 * A function component that shows an app navigator.
 */
function AppNavigator(props: any) {
  // refs
  const routeNameRef = useRef<string>(null);

  return (
      <NavigationContainer
        // linking={linking}
        ref={NavigatorService.navigationRef}
        // onReady={onNavigationReady}
        // onStateChange={onNavigationStateChange}
      >
        <RootStackNavigator.Navigator
          initialRouteName={'AppStack'}
          screenOptions={COMMON_STACK_CONFIG}
        >
          <RootStackNavigator.Screen name="AppStack" component={DashboardStackNavigator} />
        </RootStackNavigator.Navigator>
      </NavigationContainer>
  );
}

export default AppNavigator;
