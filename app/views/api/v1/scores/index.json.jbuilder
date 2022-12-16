json.array! @scores do |score|
  json.extract! score, :date, :score
end
