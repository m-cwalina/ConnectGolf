class BookingsController < ApplicationController
  def new
    @tee_time = TeeTime.find(params[:tee_time_id])
    @booking = Booking.new
  end

  def create
    @booking = Booking.new(booking_params)
  end

  private

  def booking_params
    params.require(:booking).permit(:size)
  end
end
