class Api::V1::UsersController < ApplicationController
  protect_from_forgery with: :null_session
  def current_user
    @user = current_user
  end
end
