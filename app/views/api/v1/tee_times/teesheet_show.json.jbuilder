json.extract! @teetime, :id, :time, :check_in
json.players @teetime.bookings do |booking|
  json.size booking.size
  json.id booking.id
end
json.users @teetime.users do |user|
  json.name user.name
  json.id user.id
end
