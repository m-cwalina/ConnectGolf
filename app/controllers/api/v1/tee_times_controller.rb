class Api::V1::TeeTimesController < ApplicationController
  def index
    start_date = params.fetch(:start_date, Date.today).to_date
    @tee_times = TeeTime.available_teetime.where(start_time: start_date..Date.today + 14.days).order(:created_at)
  end
end
