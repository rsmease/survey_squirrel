class Survey < ApplicationRecord
  validate :question, presence: true
  after_initialize :format_question

  def format_question
    if self.question.last !== '?'
      self.question += '?'
    end
  end
end
