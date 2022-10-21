json.array! @pending_friends do |friend|
  json.extract! friend, :id, :status, :friend_id
  json.friend do
    json.picture friend.friend.picture
    json.name friend.friend.name
    json.age friend.friend.age
    json.handicap friend.friend.handicap
  end
end
