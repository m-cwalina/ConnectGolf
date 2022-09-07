class TeeTimesController < ApplicationController

  def index
    @tee_times = TeeTime.all.order(:created_at)
  end

  def show
    @tee_time = TeeTime.find(params[:id])
  end

end
