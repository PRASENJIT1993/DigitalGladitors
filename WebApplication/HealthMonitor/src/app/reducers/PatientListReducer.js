
import ActionConstants from '../constants/ActionConstants';
import { init, recd } from '../actions/Action';

const patientListUIReducer = (state = {}, action) => {
  switch (action.type) {
    case init(ActionConstants.GET_PATIENT_LIST_BY_ID):
      return { ...state, isFetch: true };
    case recd(ActionConstants.GET_PATIENT_LIST_BY_ID):
      return { ...state, isFetch: false };
    case ActionConstants.SERVER_ERROR:
      return { ...state, isFetch: false };
    default: return state;
  }
};

const patientListErrorReducer = (state = {}, action) => {
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

const patientListReducer = (state = [], action) => {
  switch (action.type) {
    case recd(ActionConstants.GET_PATIENT_LIST_BY_ID):
      return action.value.data ? action.value.data : state;
    default: return state;
  }
};

export default {
  name: 'patientList',
  data: patientListReducer,
  error: patientListErrorReducer,
  uiState: patientListUIReducer
};
