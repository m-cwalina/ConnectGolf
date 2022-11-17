json.array! @teetimes do |teetime|
  json.extract! teetime, :id, :time
  json.players teetime.bookings do |booking|
    json.size booking.size
  end
  json.users teetime.users do |user|
    json.name user.name
  end
end
