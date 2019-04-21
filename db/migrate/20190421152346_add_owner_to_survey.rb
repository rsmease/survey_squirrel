class AddOwnerToSurvey < ActiveRecord::Migration[5.1]
  def change
    :add_column, :surveys, :surveyor_id, :integer
  end
end
