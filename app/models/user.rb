class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :friends, through: :map_user_to_friends
  has_many :groups, through: :tee_times
  belongs_to :club
end
