class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :tee_time
  enum status: [:available, :unavailable]
end
