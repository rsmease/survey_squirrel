class Survey < ApplicationRecord
  validates :question, presence: true
  after_initialize :format_question

  belongs_to :surveyor,
    class_name: 'User',
    foreign_key: 'surveyor_id',
    primary_key: 'id'

  def format_question
    if self.question.last != '?'
      self.question += '?'
    end
    self.question = self.question.split(" ").map(&:capitalize).join(" ")
  end
end
