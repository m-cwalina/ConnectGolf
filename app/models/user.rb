class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :friendships, dependent: :destroy
  has_many :friends, through: :friendships
end
