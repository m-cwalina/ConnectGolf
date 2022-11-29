json.extract! @user, :id, :name, :age, :handicap
json.current_user @current_user.name
json.friends @user.friends do |friend|
  json.name friend.name
end
