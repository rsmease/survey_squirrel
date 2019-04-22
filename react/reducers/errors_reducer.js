import _ from 'lodash';

import {
  RECEIVE_SURVEY_ERRORS
} from './actions/survey_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SURVEY_ERRORS:
      const receivedErrors = action.errors;
      return _.merge({}, state, receivedErrors);
    default:
      return state;
  }
};
