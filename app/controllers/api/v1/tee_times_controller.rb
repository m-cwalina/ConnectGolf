class Api::V1::TeeTimesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @tee_times = TeeTime.available_teetime.between(DateTime.now, Date.today + 14.days).order(:created_at)
  end

  def show
    @teetime = TeeTime.find(params[:id])
    render json: @teetime
  end

  def teesheet
    @teetimes = TeeTime.between(Date.today, Date.today + 7.days).order(:created_at)
  end

  def teesheet_show
    @teetime = TeeTime.find(params[:id])
  end

  def update
    @teetime = TeeTime.find(params[:id])
    @teetime.check_in = true
    @teetime.save
  end

  def admin_booking
    @booking = Booking.new(booking_params)
    teetime = TeeTime.find(params[:tee_time_id])
    user = User.find(params[:user_id])
    @booking.tee_time = teetime
    @booking.user = user
    @booking.save
  end

  private
  
  def booking_params
    params.permit(:size)
  end

end
