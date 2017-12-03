import React from 'react';
import ActionConstants from '../constants/ActionConstants';
import Data from '../data/data';
import { cyan600, pink600, purple600 } from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

export const getMenuBasedOnUSer = (userName) => {
  let data = [];
  switch (userName) {
    case ActionConstants.ADMIN_USERNAME_TEXT:
      data = Data.adminMenus;
      break;
    case ActionConstants.DOCTOR_USERNAME_TEXT:
      data = Data.doctorMenus;
      break;
    case ActionConstants.PATIENT_USERNAME_TEXT:
      data = Data.patientMenus;
      break;
    default:
      break;
  }
  return data;
}

export const getGraphChartBasedOnPatientStatus = (patientList) => {
  const returnData = []
  if (patientList && patientList.length > 0) {
    let data = {};
    data = patientList.filter(item => item.patientStatus === ActionConstants.PATIENT_STATUS.DISCHARGED);
    returnData.push(
      {
        name: ActionConstants.PATIENT_STATUS.DISCHARGED,
        value: data.length,
        color: cyan600,
        icon: <ExpandMore />
      }
    )
    data = patientList.filter(item => item.patientStatus === ActionConstants.PATIENT_STATUS.IN_TREATMENT);
    returnData.push(
      {
        name: ActionConstants.PATIENT_STATUS.IN_TREATMENT,
        value: data.length,
        color: pink600,
        icon: <ChevronRight />
      }
    )
    data = patientList.filter(item => item.patientStatus === ActionConstants.PATIENT_STATUS.AWAITING);
    returnData.push(
      {
        name: ActionConstants.PATIENT_STATUS.AWAITING,
        value: data.length,
        color: purple600,
        icon: <ExpandLess />
      }
    )
  }
  return returnData;
}