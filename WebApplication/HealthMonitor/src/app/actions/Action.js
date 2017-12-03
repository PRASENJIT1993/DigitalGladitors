import { navigateTo } from '../utils/NavigationHelper';
import ActionConstants from '../constants/ActionConstants';
import { fetchDataRequest, postDataRequest } from '../shared/services/DAL';
import { consoleLogger } from '../shared/utils/utils'

export const Action = (mtype, value) => {
  return { type: mtype, value };
}

export const init = actionType => `${actionType}_INIT`;
export const recd = actionType => `${actionType}_RECD`;

export const navigateToAction = (link, Header) => (dispatch, getState) => {
  dispatch(Action(ActionConstants.SET_CURRENT_SELECTED_TAB, { link: link, header: Header }));
  navigateTo(link);
};

/**
 * Actions that will be used for Fetching Data from server.
 * @param {String} actionType
 * @param {String} param
 */
export const fetchData = (actionType, param) => (dispatch, getState) => {
  dispatch(Action(init(actionType), param));
  return fetchDataRequest(actionType, param)
    .then(responseData =>
      dispatch(Action(recd(actionType), { data: responseData, receivedAt: Date.now() })))
    .catch((error) => {
      const errorMessage = `Error fetching and parsing data ${error}`;
      consoleLogger(errorMessage);
      dispatch(Action(ActionConstants.SERVER_ERROR, { error: errorMessage, receivedAt: Date.now() }));
    });
}

/**
 * Actions that will be used for Fetching Data from server.
 * @param {String} actionType
 * @param {String} param
 */
export const postData = (actionType, param) => (dispatch, getState) => {
  dispatch(Action(init(actionType), param));
  return postDataRequest(actionType, undefined, JSON.stringify(param))
    .then(responseData =>
      dispatch(Action(recd(actionType), { data: responseData, receivedAt: Date.now() })))
    .catch((error) => {
      const errorMessage = `Error fetching and parsing data ${error}`;
      consoleLogger(errorMessage);
      dispatch(Action(ActionConstants.SERVER_ERROR, { error: errorMessage, receivedAt: Date.now() }));
    });
}

/**
 * Actions that will be used for Fetching Data from server.
 * @param {String} actionType
 * @param {String} param
 */
export const fetchPatientData = (actionType, param) => (dispatch, getState) => {
  dispatch(postData(actionType, param))
    .then(responseData =>
      dispatch(navigateToAction(ActionConstants.NAVIGATION_LINK_TEXT.DOCTOR_PATIENT_DETAILS_LINK, ActionConstants.NAVIGATION_PAGE_HEADER.DOCTOR_PATIENT_DETAILS)))
    .catch((error) => {
      const errorMessage = `Error fetching and parsing data ${error}`;
      consoleLogger(errorMessage);
      dispatch(Action(ActionConstants.SERVER_ERROR, { error: errorMessage, receivedAt: Date.now() }));
    });
}