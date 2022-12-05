# Dashboard Controller
class Api::V1::DashboardsController < ApplicationController
  def hourly
    # This provides the amount of bookings per hour
    @teetimes = TeeTime.between(Date.today, Date.tomorrow).joins(:bookings).group("date_trunc('hour', time)").count
  end

  def daily
    # This provides the amount of bookings per day
    @teetimes = TeeTime.between(Date.today, Date.today + 30.days).joins(:bookings).group("date_trunc('day', time)").count.sort_by { |k, _| k }.to_h
  end

  def weekly
    # Provides the amount of bookings per week
    @teetimes = TeeTime.joins(:bookings).group("date_trunc('week', time)").count.sort_by { |k, _| k }.to_h
  end

  def monthly
    # This provides the amount of bookings per month
    @teetimes = TeeTime.joins(:bookings).group("date_trunc('month', time)").count.sort_by { |k, _| k }.to_h
  end

  def yearly
    # This provides the amount of bookings per month
    @teetimes = TeeTime.joins(:bookings).group("date_trunc('year', time)").count
  end
end
