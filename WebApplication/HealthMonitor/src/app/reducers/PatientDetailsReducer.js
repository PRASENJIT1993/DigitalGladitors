
import ActionConstants from '../constants/ActionConstants';
import { init, recd } from '../actions/Action';

const patientDetailsUIReducer = (state = { notificationList: [] }, action) => {
  switch (action.type) {
    case init(ActionConstants.GET_NOTIFICATION_DATA_BY_ID):
    case init(ActionConstants.GET_PATIENT_DETAILS_BY_ID):
    case init(ActionConstants.SEND_SOS_NOTIFICATION_ALERT):
      return { ...state, isFetch: true };
    case recd(ActionConstants.SEND_SOS_NOTIFICATION_ALERT):
      return { ...state, isFetch: false };
    case recd(ActionConstants.GET_NOTIFICATION_DATA_BY_ID):
    case recd(ActionConstants.GET_PATIENT_DETAILS_BY_ID):
      return { ...state, isFetch: false, notificationList: action.value.data };
    case ActionConstants.SERVER_ERROR:
      return { ...state, isFetch: false };
    default: return state;
  }
};

const patientDetailsErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionConstants.SERVER_ERROR:
      return { ...state, serverErrorMessage: action.value.error };
    case ActionConstants.CLEAR_SERVER_ERROR: {
      const stateRef = { ...state };
      delete stateRef.serverErrorMessage;
      return stateRef;
    }
    default: return state;
  }
};

const patientDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case recd(ActionConstants.GET_PATIENT_DETAILS_BY_ID):
      return action.value.data && action.value.data.length > 0 ? action.value.data[0] : state;
    default: return state;
  }
};

export default {
  name: 'patientDetails',
  data: patientDetailsReducer,
  error: patientDetailsErrorReducer,
  uiState: patientDetailsUIReducer
};
