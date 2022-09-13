class BookingsController < ApplicationController
  before_action :set_tee_time, only: %i[new create]
  after_action :change_amount_of_players, only: %i[create]

  def new
    @booking = Booking.new
  end
  # make create method into a service object then call it in create action here

  def create
    BookingCreator.call(
      size: params[:size],
      user_id: params[:user_id],
      tee_time_id: params[:tee_time_id]
    )
  end

  private

  def change_amount_of_players
    @tee_time = TeeTime.find(params[:tee_time_id])
    @tee_time.players = @tee_time.players - @booking.size
    @tee_time.update(players: @tee_time.players)
  end

  def set_tee_time
    @tee_time = TeeTime.find(params[:tee_time_id])
  end

  def booking_params
    params.require(:booking).permit(:size, :user_id, :tee_time_id)
  end
end

#  def create
#    @booking = Booking.new(booking_params)
#    @booking.user = current_user
#   @booking.tee_time = @tee_time
#    if @booking.save
#      redirect_to tee_time_path(@tee_time)
#    else
#      render :new
#    end
#  end
