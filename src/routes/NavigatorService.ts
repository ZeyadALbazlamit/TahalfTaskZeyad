/**
 * @prettier
 *
 */

import { createRef } from 'react';
import { AllNavStackParamList } from 'types/routes';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef>();

export function navigate(name: keyof AllNavStackParamList, params = {}) {
  navigationRef.current?.navigate(name, params);
}

export function reset(index: number, name: keyof AllNavStackParamList, params = {}) {
  navigationRef.current?.reset({ index, routes: [{ name }] });
}
