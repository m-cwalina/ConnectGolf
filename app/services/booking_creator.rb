class BookingCreator < BusinessProcess::Base
  needs :size
  needs :user_id
  needs :tee_time_id

  def call
    create_booking
  end

  def create_booking
    Booking.create(size: @size, tee_time_id: @tee_time_id, user_id: @user_id)
  end
end
