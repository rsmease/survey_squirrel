FactoryBot.define do
  factory :survey_response do
    response { FFaker::Boolean.maybe }
    survey { Survey.first || association(:survey) }
  end
end
