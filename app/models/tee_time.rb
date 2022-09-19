class TeeTime < ApplicationRecord
  has_many :bookings, dependent: :destroy
  has_many :users, through: :bookings
  scope :show_tee_time, -> { where('players >=1') }
end
