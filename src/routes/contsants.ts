/**
 * @prettier
 */

import { StackNavigationOptions } from '@react-navigation/stack';
import { Platform } from 'react-native';

// commo stack configuration.
export const COMMON_STACK_CONFIG: StackNavigationOptions = {
  headerShown: false,
  animationEnabled: Platform.OS !== 'android',
  gestureEnabled: true,
};
