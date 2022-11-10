json.array! @teetimes do |teetime|
  json.month teetime[0]
  json.count teetime[1]
end
