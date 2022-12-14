json.array! @bookings do |booking|
  json.extract! booking, :id, :size
  json.teetime booking.tee_time
end
