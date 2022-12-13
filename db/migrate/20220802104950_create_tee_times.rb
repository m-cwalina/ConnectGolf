class CreateTeeTimes < ActiveRecord::Migration[6.1]
  def change
    create_table :tee_times do |t|
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
