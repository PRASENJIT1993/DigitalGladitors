import React from 'react';
import Pets from 'material-ui/svg-icons/action/pets';
import Assessment from 'material-ui/svg-icons/action/assessment';
import AddAlert from 'material-ui/svg-icons/alert/add-alert';
import Videocam from 'material-ui/svg-icons/av/videocam';
import Call from 'material-ui/svg-icons/communication/call';
import Web from 'material-ui/svg-icons/av/web';
import { cyan600, pink600, purple600 } from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import AddLocation from 'material-ui/svg-icons/maps/add-location';
import ActionConstants from '../constants/ActionConstants';

const data = {
  adminMenus: [
    { text: 'Patients', icon: <Pets />, link: '/patients' },
    { text: 'Reports', icon: <Assessment />, link: '/reports' }
  ],
  doctorMenus: [
    { text: 'Patients', icon: <Pets />, link: ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_PATIENT_LIST_LINK },
    { text: 'Reports', icon: <Assessment />, link: ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_REPORTS_LINK },
    { text: 'Notifications', icon: <AddAlert />, link: ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_NOTIFICATION_LINK },
    { text: 'Video Conferencing', icon: <Videocam />, link: ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_VIDEO_CONFERENCE_LINK }
  ],
  patientMenus: [
    { text: 'Near by Healthcare', icon: <AddLocation />, link: ActionConstants.NAVIGATION_LINK_TEXT.PATIENT_NEAR_BY_PLACE },
    { text: 'SOS', icon: <Call />, link: ActionConstants.NAVIGATION_LINK_TEXT.PATIENT_SOS_LINK },
    { text: 'Feedback', icon: <Assessment />, link: ActionConstants.NAVIGATION_LINK_TEXT.PATIENT_FEEDBACK_FORM },
    { text: 'Notifications', icon: <AddAlert />, link: ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_NOTIFICATION_LINK },
    { text: 'Video Conferencing', icon: <Videocam />, link: ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_VIDEO_CONFERENCE_LINK }
  ],
  tablePage: {
    items: [
      { id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1' },
      { id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2' },
      { id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3' },
      { id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4' },
      { id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5' },
      { id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6' },
      { id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7' },
      { id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8' }
    ]
  },
  dashBoardPage: {
    recentProducts: [
      { id: 1, title: 'Dr. Subash Ghosh', text: 'Regarding Back Pain Issue' },
      { id: 2, title: 'Dr. Tanmay Bhatia', text: 'Regarding Back Pain Issue' },
      { id: 3, title: 'Dr. Shivam Chabra', text: 'Normal Body CheckUp' },
      { id: 4, title: 'Dr. Subham Trivedi', text: 'Normal Body CheckUp' }
    ],
    monthlySales: [
      { name: 'Jan', uv: 3700 },
      { name: 'Feb', uv: 3000 },
      { name: 'Mar', uv: 2000 },
      { name: 'Apr', uv: 2780 },
      { name: 'May', uv: 2000 },
      { name: 'Jun', uv: 1800 },
      { name: 'Jul', uv: 2600 },
      { name: 'Aug', uv: 2900 },
      { name: 'Sep', uv: 3500 },
      { name: 'Oct', uv: 3000 },
      { name: 'Nov', uv: 2400 },
      { name: 'Dec', uv: 2780 }
    ],
    monthlySteps: [
      { name: 'Jan', uv: 3700 },
      { name: 'Feb', uv: 3600 },
      { name: 'Mar', uv: 3200 },
      { name: 'Apr', uv: 2780 },
      { name: 'May', uv: 2000 },
      { name: 'Jun', uv: 2500 },
      { name: 'Jul', uv: 2600 },
      { name: 'Aug', uv: 2900 },
      { name: 'Sep', uv: 3500 },
      { name: 'Oct', uv: 3000 },
      { name: 'Nov', uv: 2400 },
      { name: 'Dec', uv: 2780 }
    ],
    newOrders: [
      { pv: 2400 },
      { pv: 1398 },
      { pv: 9800 },
      { pv: 3908 },
      { pv: 4800 },
      { pv: 3490 },
      { pv: 4300 }
    ],
    browserUsage: [
      { name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore /> },
      { name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight /> },
      { name: 'Safari', value: 300, color: purple600, icon: <ExpandLess /> }
    ]
  }
};

export default data;
