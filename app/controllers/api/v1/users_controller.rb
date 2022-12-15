class Api::V1::UsersController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  # Used to select a user in the admins booking teesheet page
  def index
    @users = User.all
  end

  # Used for the profile page
  def user
    @user = current_user
  end
end
