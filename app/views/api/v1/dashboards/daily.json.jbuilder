json.array! @teetimes do |teetime|
  json.time teetime[0]
  json.count teetime[1]
end
