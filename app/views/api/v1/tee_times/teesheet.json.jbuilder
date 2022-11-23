json.array! @teetimes do |teetime|
  json.extract! teetime, :id, :time, :check_in
  json.players(teetime.bookings.sum { |h| h[:size] })
  json.users teetime.users do |user|
    json.name user.name
  end
end

=begin
json.array! @teetimes do |teetime|
  json.extract! teetime, :id, :time, :check_in
  json.players teetime.bookings do |booking|
    json.size booking.size.count
  end
  json.users teetime.users do |user|
    json.name user.name
  end
end
=end
