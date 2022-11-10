json.array! @teetimes do |teetime|
  json.week teetime[0]
  json.count teetime[1]
end
