class RemoveSizeFromBookings < ActiveRecord::Migration[6.1]
  def change
    remove_column :bookings, :size, :string
  end
end
