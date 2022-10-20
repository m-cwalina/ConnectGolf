class DashboardsController < ApplicationController
  def user_dashboard
    @user = current_user
    @tee_times = current_user.tee_times
  end

  
end
