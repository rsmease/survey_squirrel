# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Survey.destroy_all
SurveyResponse.destroy_all

corgi_survey = Survey.create(question: 'Are corgis the best dog?')
scottish_fold_survey = Survey.create(question: 'Are Scottish Folds the best cat?')
free_will_survey = Survey.create(question: 'Does free will exist?')
skydiving_survey = Survey.create(question: 'Have you ever been skydiving?')
espresso_survey = Survey.create(question: 'Do you enjoy espresso?')


52.times do
  SurveyResponse.create(survey_id: corgi_survey.id, response: true)
end
28.times do
  SurveyResponse.create(survey_id: corgi_survey.id, response: false)
end

70.times do
  SurveyResponse.create(survey_id: scottish_fold_survey.id, response: true)
end
12.times do
  SurveyResponse.create(survey_id: scottish_fold_survey.id, response: false)
end

41.times do
  SurveyResponse.create(survey_id: free_will_survey.id, response: true)
end
47.times do
  SurveyResponse.create(survey_id: free_will_survey.id, response: false)
end

8.times do
  SurveyResponse.create(survey_id: skydiving_survey.id, response: true)
end
39.times do
  SurveyResponse.create(survey_id: skydiving_survey.id, response: false)
end

68.times do
  SurveyResponse.create(survey_id: espresso_survey.id, response: true)
end
19.times do
  SurveyResponse.create(survey_id: espresso_survey.id, response: false)
end

