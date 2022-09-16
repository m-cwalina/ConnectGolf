class BookingsController < ApplicationController
  before_action :set_tee_time, only: %i[new create change_amount_of_players]
  after_action :change_amount_of_players, only: %i[create]

  def new
    @booking = Booking.new
  end

  def create
    @booking = BookingCreator.call(size: params[:size], user_id: current_user, tee_time_id: @tee_time)
    redirect_to user_dashboard_path
  end

  private

  def change_amount_of_players
    @tee_time.players = @tee_time.players - @booking.size
    @tee_time.update(players: @tee_time.players)
  end

  def set_tee_time
    @tee_time = TeeTime.find(params[:tee_time_id])
  end

  def booking_params
    params.require(:booking).permit(:size)
  end


end

#  def create
#    @booking = Booking.new(booking_params)
#    @booking.user = current_user
#    @booking.tee_time = @tee_time
#    if @booking.save
#      redirect_to user_dashboard_path
#    else
#      render :new
#    end
#  end
