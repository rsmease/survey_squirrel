require 'active_support'

class Survey < ApplicationRecord
  validates :question, presence: true
  after_initialize :format_question

  belongs_to :surveyor, class_name: 'User', dependent: :destroy, optional: true

  has_many :responses, class_name: 'SurveyResponse'

  private

  def format_question
    return unless question && !question.empty?

    question.last == '?' || self.question += '?'
    self.question =
      self.question.split(' ').map(&:downcase).map(&:capitalize).join(' ')
  end
end
