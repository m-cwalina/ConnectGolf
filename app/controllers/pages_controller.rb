class PagesController < ApplicationController
  def home
  end

  def user_dashboard
    @user = current_user
    @tee_times = @user.tee_times.order(time: :asc).where('time > ?', DateTime.now )
  end
end
