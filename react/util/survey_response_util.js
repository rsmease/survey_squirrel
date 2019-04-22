export const postSurveyResponse = (survey_response) => (
  $.ajax({
    url: 'api/survey_responses/',
    method: 'POST',
    data: { survey_response }
  })
);
