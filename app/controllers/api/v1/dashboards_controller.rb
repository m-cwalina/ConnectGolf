class Api::V1::DashboardsController < ApplicationController

  def daily
    # This provides the amount of bookings per day
    @teetimes = TeeTime.joins(:bookings).group('time::date').count
  end

  def monthly
    @teetimes = TeeTime.joins(:bookings).group("date_trunc('month', time)").count
    #This provides the amount of bookings per month
    #@teetimes = TeeTime.joins(:bookings).group('(EXTRACT(MONTH FROM time))::integer').count
  end

end
