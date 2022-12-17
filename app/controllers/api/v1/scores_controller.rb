class Api::V1::ScoresController < ApplicationController
  def index
    @scores = current_user.scores.where('date < ?', DateTime.now).order(:date)
  end

  def rounds_per_month
    @rounds = current_user.scores.group("date_trunc('month', date)").count.sort_by { |k, _| k }.to_h
  end
end
