class SurveyResponse < ApplicationRecord
  validates :survey_id, presence: true
  validates :response, inclusion: { in: [true, false] }

  belongs_to :survey, dependent: :destroy
end
