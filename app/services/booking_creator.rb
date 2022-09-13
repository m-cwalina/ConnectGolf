class BookingCreator
  def intialize(:size, :user_id, :tee_time_id)
    @size = size
    @user_id = current_user
    @tee_time = tee_time_id
  end

  def call(*args)
    new(*args).create_booking
  end

  private

  def create_booking
    Booking.create!(
      size: @size,
      user_id: @user_id,
      tee_time_id: tee_time_id
    )
    rescue ActiveRecord::RecordNotUnique => e
  end
end
