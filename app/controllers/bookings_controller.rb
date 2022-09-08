class BookingsController < ApplicationController
  before_action :set_tee_time, only: %i[new create]

  def new
    @booking = Booking.new
  end
  # make create method into a service object then call it in create action here
  def create
    @booking = Booking.new(booking_params)
    @booking.user = current_user
    @booking.tee_time = @tee_time
    if @booking.save
      redirect_to tee_time_path(@tee_time)
    else
      render :new
    end
  end

  private

  def set_tee_time
    @tee_time = TeeTime.find(params[:tee_time_id])
  end

  def booking_params
    params.require(:booking).permit(:size)
  end
end
