class RemoveEndTimeFromTeeTime < ActiveRecord::Migration[6.1]
  def change
    remove_column :tee_times, :end_time, :datetime
  end
end
