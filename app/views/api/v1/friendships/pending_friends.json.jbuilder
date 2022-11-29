json.array! @pending_friendships do |friendship|
  json.extract! friendship, :id, :status, :user_id, :friend_id
  json.friend do
    json.picture friendship.friend.picture
    json.name friendship.friend.name
    json.age friendship.friend.age
    json.handicap friendship.friend.handicap
    json.id friendship.friend.id
  end
end
