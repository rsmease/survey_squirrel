require 'active_support'

class Survey < ApplicationRecord
  validates :question, presence: true
  after_initialize :format_question

  belongs_to :surveyor,
             class_name: 'User',
             foreign_key: 'surveyor_id',
             primary_key: 'id',
             dependent: :destroy,
             optional: true

  has_many :responses, optional: true

  private

  def format_question
    return unless question && !question.empty?

    question.last == '?' || self.question += '?'
    self.question =
      self.question.split(' ').map(&:downcase).map(&:capitalize).join(' ')
  end
end
