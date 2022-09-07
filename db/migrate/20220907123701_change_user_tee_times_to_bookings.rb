class ChangeUserTeeTimesToBookings < ActiveRecord::Migration[6.1]
  def change
    rename_table :user_to_tee_times, :bookings
  end
end
