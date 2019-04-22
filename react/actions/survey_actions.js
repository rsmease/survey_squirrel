import {
  fetchSurvey,
  fetchAllSurveys,
  postSurvey
} from '../util/survey_util';

import {
  postSurveyResponse
} from '../util/survey_response_util';

export const RECEIVE_SURVEY = 'RECEIVE_SURVEY';
export const RECEIVE_ALL_SURVEYS = 'RECEIVE_ALL_SURVEYS';
export const RECEIVE_SURVEY_ERRORS = 'RECEIVE_SURVEY_ERRORS';

const receiveSurvey = (survey) => ({
  type: RECEIVE_SURVEY,
  survey
});

const receiveAllSurveys = (surveys) => ({
  type: RECEIVE_ALL_SURVEYS,
  surveys
});

const receiveSurveyErrors = (errors) => ({
  type: RECEIVE_SURVEY_ERRORS,
  errors
})

export const requestSurvey = (id) => (dispatch) =>
  fetchSurvey(id).then(fetchedSurvey =>
    dispatch(receiveSurvey(fetchedSurvey)));

export const requestAllSurveys = () => (dispatch) => fetchAllSurveys()
  .then(fetchedSurveys => dispatch(receiveAllSurveys(fetchedSurveys)));

export const requestToCreateSurvey = (formSurvey) => (dispatch) =>
  postSurvey(formSurvey).then(createdSurvey =>
    dispatch(receiveSurvey(createdSurvey)),
    err => (dispatch(receiveSurveyErrors(err.responseJSON))));

export const requestToCreateSurveyResponse = (formSurveyResponse) => (dispatch) =>
  postSurveyResponse(formSurveyResponse).then(updatedSurvey =>
    dispatch(receiveSurvey(updatedSurvey)));

