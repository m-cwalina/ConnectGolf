class TeeTime < ApplicationRecord
  has_many :bookings, dependent: :destroy
  has_many :users, through: :bookings
  scope :between, lambda { |start_date, end_date| where('time >= ? AND time <= ?', start_date, end_date) }
  scope :available_teetime, -> { where('players >=1') }
end
