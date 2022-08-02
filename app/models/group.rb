class Group < ApplicationRecord
  has_many :users, through: :tee_times
end
