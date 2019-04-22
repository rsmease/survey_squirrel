import _ from 'lodash';

import {
  RECEIVE_SURVEY,
  RECEIVE_ALL_SURVEYS
} from './actions/survey_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SURVEY:
      const receivedSurvey = action.survey;
      return _.merge({}, state, {
        [receivedSurvey.id]: receivedSurvey
      });
    case RECEIVE_ALL_SURVEYS:
      const allSurveys = action.surveys;
      return _.merge({}, state, allSurveys);
    default:
      return state;
  }
};
