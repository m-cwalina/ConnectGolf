class TeeTime < ApplicationRecord
  has_many :bookings, dependent: :destroy
  has_many :users, through: :bookings
  scope :available_teetime, -> { where('players >=1') }
end
