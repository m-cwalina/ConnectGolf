class BookingsController < ApplicationController
  def new
    @tee_time = TeeTime.find(params[:tee_time_id])
    @booking = Booking.new
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.user = current_user
    @tee_time = TeeTime.find(params[:tee_time_id])
    @booking.tee_time = @tee_time
    if @booking.save
      redirect_to tee_time_path(@tee_time)
    else
      render :new
    end
  end

  def show
    @tee_time = TeeTime.find(params[:booking_id])
  end

  private

  def booking_params
    params.require(:booking).permit(:size)
  end
end
