class Api::V1::DashboardsController < ApplicationController

  def bookings
  @bookings = Booking.all
  end

  def daily
    # This provides the amount of bookings per day
    @teetimes = TeeTime.joins(:bookings).group('time::date').count
  end

  def monthly_booked_teetimes
    #This provides the amount of bookings per month
    @teetimes = TeeTime.joins(:bookings).group('(EXTRACT(MONTH FROM time))::integer').count
  end

end
