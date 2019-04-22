export const fetchSurvey = (id) => (
  $.ajax({
    url: `api/surveys/${id}`,
    method: 'GET',
    data: { id }
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
