class TeeTimesController < ApplicationController

  def index
    start_date = params.fetch(:start_date, Date.today).to_date
    @tee_times = TeeTime.where(start_time: start_date..Date.today + 14.days)
  end

  def show
    @tee_time = TeeTime.find(params[:id])
  end
end
