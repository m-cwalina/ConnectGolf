class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :tee_time
  validates :size, numericality: { less_than: 5 }
end
