class CreateUserToTeeTimes < ActiveRecord::Migration[6.1]
  def change
    create_table :user_to_tee_times do |t|
      t.references :user, null: false, foreign_key: true
      t.references :tee_time, null: false, foreign_key: true

      t.timestamps
    end
  end
end
