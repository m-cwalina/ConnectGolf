class Api::V1::DashboardsController < ApplicationController
  before_action :authenticate_user!

  def hourly
    @teetimes = teetimes_for('hour')
  end

  def daily
    @teetimes = teetimes_for('day')
  end

  def weekly
    @teetimes = teetimes_for('week')
  end

  def monthly
    @teetimes = teetimes_for('month')
  end

  def yearly
    @teetimes = teetimes_for('year')
  end

  private

  def teetimes_for(period)
    scope = case period
            when 'hour'
              TeeTime.between(Date.today, Date.tomorrow)
            when 'day'
              TeeTime.between(Date.today, Date.today + 30.days)
            else
              TeeTime.all
            end
    scope.joins(:bookings).group("date_trunc('#{period}', time)").count.sort_by { |k, _| k }.to_h
  end
end
