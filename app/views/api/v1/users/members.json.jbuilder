json.array! @members do |member|
  json.extract! member, :id, :name, :age, :handicap, :picture
  json.friends member.friends do |friend|
    json.name friend.name
  end
end
