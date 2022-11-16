json.array! @teetimes do |teetime|
  json.extract! teetime, :id, :time
    json.players teetime.bookings.size
    json.user teetime.users
end
