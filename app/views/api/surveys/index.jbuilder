@surveys.each do |survey|
  json.partial! 'api/surveys/survey', @survey: survey
end
