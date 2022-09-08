class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :friendships, dependent: :destroy
  has_many :friends, -> { where "status = 'accepted'" }, through: :friendships
  has_many :requested_friends, -> { where "status = 'requested'" }, through: :friendships, source: :friend
  has_many :pending_friends, -> { where "status = 'pending'" }, through: :friendships, source: :friend
  has_many :bookings, dependent: :destroy
  belongs_to :club
end
