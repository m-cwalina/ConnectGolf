class MapUserToFriend < ApplicationRecord
  belongs_to :user
  belongs_to :friend
end
