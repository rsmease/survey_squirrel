class Survey < ApplicationRecord
  validates :question, presence: true
  after_initialize :format_question

  def format_question
    if self.question.last != '?'
      self.question += '?'
    end
    self.question = self.question.split(" ").map(&:capitalize).join(" ")
  end
end
