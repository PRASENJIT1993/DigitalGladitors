
import ActionConstants from '../constants/ActionConstants';
import { init, recd } from '../actions/Action';

const patientReducerUIReducer = (state = {}, action) => {
  switch (action.type) {
    case init(ActionConstants.GET_PATIENT_PROFILE_DATA):
      return { ...state, isFetch: true };
    case recd(ActionConstants.GET_PATIENT_PROFILE_DATA):
      return { ...state, isFetch: false };
    case ActionConstants.SERVER_ERROR:
      return { ...state, isFetch: false };
    default: return state;
  }
};

const patientReducerErrorReducer = (state = {}, action) => {
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

const patientReducerReducer = (state = {}, action) => {
  switch (action.type) {
    case recd(ActionConstants.GET_PATIENT_PROFILE_DATA):
      return action.value.data && action.value.data.length > 0 ? action.value.data[0] : state;
    default: return state;
  }
};

export default {
  name: 'patient',
  data: patientReducerReducer,
  error: patientReducerErrorReducer,
  uiState: patientReducerUIReducer
};
