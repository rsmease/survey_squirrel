import { createStore, applyMiddleware } from 'redux';

import thunk from './thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

export default (preloadedState = {}) => createStore(
  rootReducer, preloadedState,
  applyMiddleware(thunk)
);
