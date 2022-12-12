class RemoveStartTimeFromTeeTime < ActiveRecord::Migration[6.1]
  def change
    remove_column :tee_times, :start_time, :datetime
  end
end
