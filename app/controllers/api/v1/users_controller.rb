class Api::V1::UsersController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  def index
    @users = User.all
  end

  def user
    @user = current_user
  end

  def members
    @members = User.all_except(current_user).except_friends(current_user).includes(:friends)
  end

  def member_show
    @member = User.find(params[:id])
    @current_user = current_user
  end
end
