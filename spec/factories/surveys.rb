FactoryBot.define do
  factory :survey do
    question { FFaker::Lorem.sentence(6) }
  end
end
