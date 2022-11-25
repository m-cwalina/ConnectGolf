class Api::V1::BookingsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create destroy]
  before_action :set_tee_time, only: %i[new create change_amount_of_players]
  after_action :change_amount_of_players, only: %i[create]

  # This action will be moved into a service object when application becomes larger
  def create
    @booking = Booking.new(booking_params)
    @booking.user = current_user
    @booking.tee_time = @tee_time
    @booking.save
  end

  def destroy
    @booking = Booking.where(tee_time_id: params[:id]).first
    @booking.destroy
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
