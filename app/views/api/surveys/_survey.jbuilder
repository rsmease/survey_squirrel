json.extract! survey, :id, :question, :surveyor_id
json.responses do
  json.partial! 'api/survey_responses/survey_response',
                collection: survey.responses, as: :survey_response
end
