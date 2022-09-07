class AddEndTimeToTeeTimes < ActiveRecord::Migration[6.1]
  def change
    add_column :tee_times, :end_time, :datetime
  end
end
