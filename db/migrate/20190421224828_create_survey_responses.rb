class CreateSurveyResponses < ActiveRecord::Migration[5.1]
  def change
    create_table :survey_responses do |t|
      t.boolean 'response', null: false
      t.integer 'survey_id', null: false
      t.timestamps
    end
  end
end
