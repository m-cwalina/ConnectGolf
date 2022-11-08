json.booking do
  json.id @booking.id
  json.time @booking.tee_time.time
end

json.array! @bookings do |booking|
  json.extract! booking, :id, :time, :players, :start_time
    json.teetime do
      json.time
    end
end
