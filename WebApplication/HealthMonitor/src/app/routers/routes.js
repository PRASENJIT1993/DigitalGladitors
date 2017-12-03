import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainApp from '../containers/MainApp';
import LoginPage from '../containers/Login/LoginPage';
import AdminDashboardPage from '../containers/Dashboard/AdminDashboardPage';
import DoctorDashboardPage from '../containers/Dashboard/DoctorDashboardPage';
import PatientDashboardPage from '../containers/Dashboard/PatientDashboardPage';
import PatientsListPage from '../containers/DoctorPages/PatientsListPage';
import ActionConstants from '../constants/ActionConstants';
import PatientDetailsPage from '../containers/DoctorPages/PatientDetailsPage';
import NotificationPage from '../containers/DoctorPages/NotificationPage';
import ReportsPage from '../containers/DoctorPages/ReportsPage';
import VideoConferencePage from '../containers/DoctorPages/VideoConferencePage';
import PatientSOSPage from '../containers/Patient/PatientSOSPage';
import FeedBackPage from '../containers/Patient/FeedBackPage';
import NearByPlacePage from '../containers/Patient/NearByPlacePage';

export default (
  <Route path="/" component={MainApp} >
    <IndexRoute component={LoginPage} />
    <Route path={ActionConstants.NAVIGATION_LINK_TEXT.ADMIN_DASHBOARD_LINK} component={AdminDashboardPage} />
    <Route path={ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_DASHBOARD_LINK} component={DoctorDashboardPage} />
    <Route path={ActionConstants.NAVIGATION_LINK_TEXT.PATIENT_DASHBOARD_LINK} component={PatientDashboardPage} />
    <Route path={ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_PATIENT_LIST_LINK} component={PatientsListPage} />
    <Route path={ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_PATIENT_DETAILS_LINK} component={PatientDetailsPage} />
    <Route path={ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_NOTIFICATION_LINK} component={NotificationPage} />
    <Route path={ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_REPORTS_LINK} component={ReportsPage} />
    <Route path={ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_VIDEO_CONFERENCE_LINK} component={VideoConferencePage} />
    <Route path={ActionConstants.NAVIGATION_LINK_TEXT.PATIENT_SOS_LINK} component={PatientSOSPage} />
    <Route path={ActionConstants.NAVIGATION_LINK_TEXT.PATIENT_FEEDBACK_FORM} component={FeedBackPage} />
    <Route path={ActionConstants.NAVIGATION_LINK_TEXT.PATIENT_NEAR_BY_PLACE} component={NearByPlacePage} />
  </Route>
);
