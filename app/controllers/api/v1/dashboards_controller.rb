class Api::V1::DashboardsController < ApplicationController


  def hourly
    # This provides the amount of bookings per hour
    @teetimes = TeeTime.between(Date.today, Date.tomorrow).joins(:bookings).group("date_trunc('hour', time)").count
  end

  def daily
    # This provides the amount of bookings per day
    @teetimes = TeeTime.between(Date.today.beginning_of_month, Date.today.end_of_month).joins(:bookings).group('time::date').count
  end

  def weekly
    # Provides the amount of bookings per week
    @teetimes = TeeTime.joins(:bookings).group("date_trunc('week', time)").count
  end

  def monthly
    #This provides the amount of bookings per month
    @teetimes = TeeTime.joins(:bookings).group("date_trunc('month', time)").count
  end

  def yearly
    #This provides the amount of bookings per month
    @teetimes = TeeTime.joins(:bookings).group("date_trunc('year', time)").count
  end

end
