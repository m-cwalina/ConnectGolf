json.array! @rounds do |round|
  json.month round[0]
  json.count round[1]
end
