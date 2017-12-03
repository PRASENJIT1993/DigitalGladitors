import { combineReducers } from 'redux';
import sessionReducer from './SessionReducer';
import initialDataReducer from './InitialDataReducer';
import { getModuleReducers } from './ReducerUtil';
import modules from './modules';


const dataReducer = combineReducers({
  initial: initialDataReducer,
  current: combineReducers(getModuleReducers(modules, 'data'))
});


const RootReducer = combineReducers({
  error: combineReducers(getModuleReducers(modules, 'error')),
  data: dataReducer,
  session: sessionReducer,
  uiState: combineReducers(getModuleReducers(modules, 'uiState'))
});


export default RootReducer;