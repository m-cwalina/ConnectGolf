json.array! @bookings do |booking|
  json.extract! booking, :tee_time_id, :id, :size
    json.time booking.tee_time.time
    json.id booking.id
end
