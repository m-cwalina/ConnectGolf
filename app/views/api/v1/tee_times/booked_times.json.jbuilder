json.array! @teetimes do |teetime|
  json.extract! teetime, :id, :time, :players
end
