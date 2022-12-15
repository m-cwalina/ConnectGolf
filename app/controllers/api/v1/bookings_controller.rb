class Api::V1::BookingsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create destroy user_destroy]
  before_action :set_tee_time, only: %i[new create change_amount_of_players]
  after_action :change_amount_of_players, only: %i[create]

  # This action will be moved into a service object when application becomes larger
  def create
    @booking = Booking.new(booking_params)
    @booking.user = current_user
    @booking.tee_time = @tee_time
    @booking.save
  end

  # Show a specific booking
  def show
    @booking = Booking.find(params[:id])
  end

  def destroy
    @booking = Booking.where(tee_time_id: params[:id], user_id: params[:user_id])
    @booking.first.destroy
  end

  def user_destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
  end

  # Used in the user dashboard to show the current_users teetimes that are booked
  def booked_times
    @bookings = current_user.bookings.includes(:tee_time).order('tee_times.time asc')
  end

  private

  # This method is called after the create action. I am decreaseing the amount of players,
  # set at 4, by the amount of the booking size. I then update the amount of players in the tee time.
  def change_amount_of_players
    @tee_time.players = @tee_time.players - @booking.size
    @tee_time.update(players: @tee_time.players)
  end

  def set_tee_time
    @tee_time = TeeTime.find(params[:tee_time_id])
  end

  def booking_params
    params.permit(:size)
  end
end
