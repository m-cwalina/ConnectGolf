class AddCheckInToTeeTimes < ActiveRecord::Migration[6.1]
  def change
    add_column :tee_times, :check_in, :boolean, default: false
  end
end
