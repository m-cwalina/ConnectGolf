class AddStartTimeToTeeTimes < ActiveRecord::Migration[6.1]
  def change
    add_column :tee_times, :start_time, :datetime
  end
end
