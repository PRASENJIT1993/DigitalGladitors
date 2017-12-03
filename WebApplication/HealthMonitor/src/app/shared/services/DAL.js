
import ActionConstants from '../../constants/ActionConstants';
import { request, getBASEURL } from '../utils/utils';

const N_BASE_URL = process.env.MODE === 'WEB' ? getBASEURL() : undefined;
const N_CREDS = process.env.CREDS;

const getHeaders = { 'Content-Type': 'application/json' };
//const postHeaders = { 'x-method-override': 'PATCH', patchtype: 'MERGE' };

/**
 * Provides url or endpoints for various actions
 * @param {String} actionType
 * @param {String} param
 */
export const getUrl = (actionType, param) => {
  switch (actionType) {
    case ActionConstants.GET_DUMMY_DATA:
      return `https://udwbi68yg2.execute-api.us-east-1.amazonaws.com/dev`;
    case ActionConstants.GET_PATIENT_LIST_BY_ID:
      return `https://5glnto4oc3.execute-api.us-east-1.amazonaws.com/hackhathon`;
    case ActionConstants.GET_PATIENT_DETAILS_BY_ID:
      return `https://ih4cnmnnyc.execute-api.us-east-1.amazonaws.com/patientDetail`;
    case ActionConstants.GET_NOTIFICATION_DATA_BY_ID:
      return `https://9hmb3ghbmh.execute-api.us-east-1.amazonaws.com/notification`;
    case ActionConstants.SEND_SOS_NOTIFICATION_ALERT:
      return `https://q2thzvhkth.execute-api.us-east-1.amazonaws.com/sns`;
    case ActionConstants.GET_PATIENT_PROFILE_DATA:
      return `https://xvuxpm9g42.execute-api.us-east-1.amazonaws.com/fitbit`;
    default: return '';
  }
};

/**
 * Used for fetching the data from server
 * @param {String} actionType
 * @param {String} data
 */
export const fetchDataRequest = (actionType, data) => {
  const url = getUrl(actionType, data);
  const options = { method: 'GET', headers: getHeaders };
  return request(url, options)
    .then(responseData => (responseData.member ? responseData.member : responseData));
};

/**
 * Will be used to post data to server.
 * @param {String} actionType
 * @param {Object} objectType
 */
export const postDataRequest = (actionType, hrefURL, data, additionalHeaders) => {
  const url = getUrl(actionType, hrefURL);
  const options = { method: 'POST', body: data, headers: getHeaders };
  return request(url, options)
    .then(responseData => responseData);
};
