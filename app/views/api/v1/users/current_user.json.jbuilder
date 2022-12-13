json.extract! @user, :id, :name, :handicap, :age, :picture, :club_id
json.club @user.club.name
