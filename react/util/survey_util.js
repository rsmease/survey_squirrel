export const fetchSurvey = (surveyID) => (
  $.ajax({
    url: `api/surveys/${surveyID}`,
    method: 'GET',
    data: { surveyID }
  })
);

export const fetchAllSurveys = () => (
  $.ajax({
    url: `api/surveys/`,
    method: 'GET'
  })
);

export const postSurvey = (survey) => (
  $.ajax({
    url: 'api/surveys',
    method: 'POST',
    data: { survey }
  })
);
