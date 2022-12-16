class Score < ApplicationRecord
  belongs_to :user
  scope :between, lambda { |start_date, end_date| where('time >= ? AND time <= ?', start_date, end_date) }
end
