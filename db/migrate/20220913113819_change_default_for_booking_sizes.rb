class ChangeDefaultForBookingSizes < ActiveRecord::Migration[6.1]
  def change
    change_column :bookings, :size, :integer, default: 4
  end
end
