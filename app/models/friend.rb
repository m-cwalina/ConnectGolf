class Friend < ApplicationRecord
  has_many :users, through: :friendships
end
