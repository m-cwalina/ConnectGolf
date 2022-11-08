class Api::V1::DashboardsController < ApplicationController

  def bookings
  @bookings = Booking.all
  end

  def teetimes

  @teetimes = TeeTime.group(:time)
  end

end
