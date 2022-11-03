class Api::V1::UsersController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    user = current_user
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end
end
