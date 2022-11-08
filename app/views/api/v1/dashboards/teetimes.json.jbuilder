json.array! @teetimes do |teetime|
  json.extract! teetime, :time, :id
  json.booking teetime.bookings, :id, :size
end
