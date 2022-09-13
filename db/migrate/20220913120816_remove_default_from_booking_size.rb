class RemoveDefaultFromBookingSize < ActiveRecord::Migration[6.1]
  def change
    change_column :bookings, :size, :integer, default: 0
  end
end
