json.extract! @member, :id, :name, :age, :handicap, :picture
json.current_user @current_user.name
json.friends @member.friends do |friend|
  json.name friend.name
end
