json.extract! @friend, :id, :status, :friend_id, :user_id
json.friend do
  json.picture @friend.friend.picture
  json.name @friend.friend.name
  json.age @friend.friend.age
  json.handicap @friend.friend.handicap
end
json.user do
  json.name @friend.user.name
  json.id @friend.user.id
end
