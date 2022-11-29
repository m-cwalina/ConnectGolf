json.extract! @pending_friendship, :id, :status
json.user do
  json.name @pending_friendship.user.name
  json.id @pending_friendship.user.id
end
json.friend do
  json.picture @pending_friendship.friend.picture
  json.name @pending_friendship.friend.name
  json.age @pending_friendship.friend.age
  json.handicap @pending_friendship.friend.handicap
  json.id @pending_friendship.friend.id
end
