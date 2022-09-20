json.array! @tee_times do |teetime|
  json.extract! teetime, :id, :time, :players, :start_time
end
