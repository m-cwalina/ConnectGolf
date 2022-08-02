class Friend < ApplicationRecord
  has_many :users, through: :map_user_to_friends
end
