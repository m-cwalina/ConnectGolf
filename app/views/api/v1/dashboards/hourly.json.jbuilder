json.array! @teetimes do |teetime|
  json.hour teetime[0]
  json.count teetime[1]
end
