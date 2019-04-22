import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import surveysReducer from './surveys_reducer';

export default combineReducers({
  surveys: surveysReducer,
  errors: errorsReducer
});
