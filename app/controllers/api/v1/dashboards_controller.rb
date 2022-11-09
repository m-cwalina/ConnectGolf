class Api::V1::DashboardsController < ApplicationController

  def bookings
  @bookings = Booking.all
  end

  def teetimes
    #This provides the amount of bookings per day
    @teetimes = TeeTime.joins(:bookings).group('time::date').count

    #This provides the amount of bookings per month
    TeeTime.joins(:bookings).group('(EXTRACT(MONTH FROM time))::integer').count

  end

end
