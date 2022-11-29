class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :friendships, dependent: :destroy
  has_many :friends, -> { where "status = 'accepted'" }, through: :friendships
  has_many :requested_friends, -> { where "status = 'requested'" }, through: :friendships, source: :friend
  has_many :pending_friends, -> { where "status = 'pending'" }, through: :friendships, source: :friend
  has_many :bookings, dependent: :destroy
  has_many :tee_times, through: :bookings
  has_many :groups
  belongs_to :club
  scope :all_except, ->(user) { where.not(id: user) }
end
