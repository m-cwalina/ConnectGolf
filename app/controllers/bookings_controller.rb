class BookingsController < ApplicationController
  def new
    @tee_time = TeeTime.find(params[:tee_time_id])
    @booking = Booking.new
  end

  def create
  end
end
