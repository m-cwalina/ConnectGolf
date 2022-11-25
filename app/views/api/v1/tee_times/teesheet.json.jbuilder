json.array! @teetimes do |teetime|
  json.extract! teetime, :id, :time, :check_in
  json.players(teetime.bookings.sum { |h| h[:size] })
  json.users teetime.users do |user|
    json.name user.name
    json.id user.id
  end
end
