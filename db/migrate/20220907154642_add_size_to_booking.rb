class AddSizeToBooking < ActiveRecord::Migration[6.1]
  def change
    add_column :bookings, :size, :string
  end
end
