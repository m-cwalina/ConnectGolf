class BookingCreator < BusinessProcess::Base
  needs :size
  needs :tee_time_id
  needs :user_id

  def call
    create_booking
  end

  def create_booking
    booking = Booking.create(size: @size, user_id: @user_id, tee_time_id: @tee_time_id)
  end
end
