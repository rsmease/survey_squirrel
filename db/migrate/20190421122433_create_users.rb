class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string "email", null: false
      t.string "password_digest", null: false
      t.string "session_token", null: false
      t.index ["email"], name: "index_users_on_email", unique: true
      t.index ["session_token"], name: "index_users_on_session_token", unique: true
      t.timestamps
    end
  end
end
