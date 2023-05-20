/**
 * @prettier
 */

import { TBalance } from 'types/profile';
import { TProfile, TEmployee } from './profile';
import { ClockingButtonType, TransactionTypesEnums } from './enums';
import { TAttendanceHistory } from './attendance_history';
import { ApiTypes, TransactionsTypes } from '.';
import { DocumentsCenterItem, DocumentsType } from './document';
import { CategoryScales } from './api';
import { TTask } from './task';

export interface ScreenNavProps {
  screen?: keyof AllNavStackParamList;
  params?: Object;
}

export interface MoviesDetailsScreenProps {
 id:number
}

export type AllNavStackParamList = {
  DashboardScreen:ScreenNavProps,
  AppStack: ScreenNavProps;
  MoviesDetailsScreen:MoviesDetailsScreenProps,
  LoginScreen:ScreenNavProps
};


// interface RequestLeaveStackParams extends ScreenNavProps {
//   id: string;
// }