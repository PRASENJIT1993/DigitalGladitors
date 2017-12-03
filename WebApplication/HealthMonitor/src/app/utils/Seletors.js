import ActionConstants from '../constants/ActionConstants';
import { createSelector } from 'reselect';
import { getMenuBasedOnUSer, getGraphChartBasedOnPatientStatus } from './Utils'

const userName = state => state.uiState.login.userName;
const patientList = state => state.data.current.patientList;

export const getMenuBasedOnUserSelector = createSelector(
  [userName],
  (userName) => getMenuBasedOnUSer(userName)
);

export const getPatientGraphStatus = createSelector(
  [patientList],
  (patientList) => getGraphChartBasedOnPatientStatus(patientList)
);