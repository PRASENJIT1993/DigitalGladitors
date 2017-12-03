import ActionConstants from '../constants/ActionConstants';

const loginUIReducer = (state = { isUserLoggedIn: false, userName: '', userId: '', appHeader: ActionConstants.NAVIGATION_PAGE_HEADER.DEFAULT_HEADER }, action) => {
  switch (action.type) {
    case ActionConstants.USER_LOGGED_IN_SUCCESS:
      return {
        ...state, isUserLoggedIn: true, userName: action.value.userName, userId: action.value.userId
      }
    case ActionConstants.USER_LOGGED_OUT_SUCCESS: {
      return {
        ...state, isUserLoggedIn: false, userName: '', userId: '', appHeader: ActionConstants.NAVIGATION_PAGE_HEADER.DEFAULT_HEADER
      }
    }
    case ActionConstants.SET_CURRENT_SELECTED_TAB:
      return {
        ...state,
        appCurrentLink: action.value.link,
        appHeader: action.value.header
      }
    default: return state;
  }
};

const loginErrorReducer = (state = {}, action) => {
  switch (action.type) {

    default: return state;
  }
};

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default {
  name: 'login',
  data: loginReducer,
  error: loginErrorReducer,
  uiState: loginUIReducer
};
