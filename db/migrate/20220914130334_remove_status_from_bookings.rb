class RemoveStatusFromBookings < ActiveRecord::Migration[6.1]
  def change
    remove_column :bookings, :status, :integer
  end
end
