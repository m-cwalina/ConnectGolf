class RemoveGroupFromTeeTimes < ActiveRecord::Migration[6.1]
  def change
    remove_reference(:tee_times, :group, index: true, foreign_key: true)
  end
end
