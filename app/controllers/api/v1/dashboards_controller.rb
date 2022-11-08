class Api::V1::DashboardsController < ApplicationController

  def bookings
  @bookings = Booking.all
  end
  
end
