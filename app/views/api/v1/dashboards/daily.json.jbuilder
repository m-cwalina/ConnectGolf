json.array! @teetimes do |teetime|
  json.day teetime[0]
  json.count teetime[1]
end
