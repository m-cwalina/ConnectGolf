class Api::V1::TeeTimesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    start_date = params.fetch(:start_date, Time.now).to_time
    @tee_times = TeeTime.available_teetime.where(time: start_date..Date.today + 13.days).order(:created_at)
  end
end
