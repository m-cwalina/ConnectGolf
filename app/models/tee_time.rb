class TeeTime < ApplicationRecord
  has_many :bookings, dependent: :destroy
  has_many :users, through: :bookings
  scope :between, lambda { |start_date, end_date| where('time >= ? AND time <= ?', start_date, end_date) }
  scope :available_teetime, -> { where('players >=1') }

  def self.teetimes_for(period)
    scope = case period
            when 'hour'
              self.between(Date.today, Date.tomorrow)
            when 'day'
              self.between(Date.today, Date.today + 30.days)
            else
              self.all
            end
    scope.joins(:bookings).group("date_trunc('#{period}', time)").count.sort_by { |k, _| k }.to_h
  end
end
