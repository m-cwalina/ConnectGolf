class ApplicationController < ActionController::Base

  def after_sign_in_path_for(_resource)
    user_dashboard_path
  end

end
