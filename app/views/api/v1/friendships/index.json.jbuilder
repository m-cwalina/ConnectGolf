json.array! @friendships do |friendship|
  json.extract! friendship, :id, :status, :friend_id
  json.friend do
    json.name friendship.friend.name
    json.age friendship.friend.age
    json.handicap friendship.friend.handicap
  end
end
