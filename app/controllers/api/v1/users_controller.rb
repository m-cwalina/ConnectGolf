class Api::V1::UsersController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @users = User.all_except(current_user)
  end

  def show
    @current_user = current_user
    @user = User.find(params[:id])
    
  end
end
