class DashboardsController < ApplicationController
  def user_dashboard
    @user = current_user
  end
end
