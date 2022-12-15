class Api::V1::UsersController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  def index
    @users = User.all
  end

  def user
    @user = current_user
  end
end
