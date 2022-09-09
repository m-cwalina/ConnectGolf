class AddSizeToBookings < ActiveRecord::Migration[6.1]
  def change
    add_column :bookings, :size, :integer
  end
end
