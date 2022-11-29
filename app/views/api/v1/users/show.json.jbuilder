  json.extract! @user, :id, :name, :age, :handicap
  json.friends @user.friends do |friend|
    json.name friend.name
  end
