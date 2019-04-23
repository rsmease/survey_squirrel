json.extract! survey, :id, :question, :surveyor_id
json.yes_count survey.responses.where(response: true).count
json.no_count survey.responses.where(response: false).count
