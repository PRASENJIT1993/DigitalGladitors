
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import RootReducer from './Reducer';

const enhancers = [];

let composeEnhancers = compose;

// Need to add a check if it is production than remove below code.

if (process.env.NODE_ENV === 'development') {
  const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension;
  }
}

const loggerMiddleware = createLogger();
let middleware = [thunkMiddleware];
if (process.env.NODE_ENV === 'development') { middleware = [...middleware, loggerMiddleware]; }

let persistedState = {};

const store = createStore(RootReducer, persistedState, composeEnhancers(applyMiddleware(...middleware)));

export default store;
