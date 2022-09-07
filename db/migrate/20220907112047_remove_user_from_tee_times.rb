class RemoveUserFromTeeTimes < ActiveRecord::Migration[6.1]
  def change
    remove_reference :tee_times, :user, null: false, foreign_key: true
  end
end
