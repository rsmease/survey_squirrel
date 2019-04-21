FactoryBot.define do
  factory :survey do
    question { FFaker::Lorem.sentence(6) }

    factory :survey_with_responses do
      after(:create) do |survey|
        create(:survey_response, survey: survey)
        create(:survey_response, survey: survey)
      end
    end
  end
end
