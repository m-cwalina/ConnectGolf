class AddPlayersToTeeTimes < ActiveRecord::Migration[6.1]
  def change
    add_column :tee_times, :players, :integer, default: 4
  end
end
