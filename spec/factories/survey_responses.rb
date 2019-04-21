FactoryBot.define do
  factory :survey_response do
    response { FFaker::Boolean.maybe }
    survey_id { Survey.first.id || association(:survey) }
  end
end
