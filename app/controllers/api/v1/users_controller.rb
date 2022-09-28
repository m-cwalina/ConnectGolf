class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.all
  end

  def show
    @user = current_user
    @friendships = Friendship.where(user_id: current_user.id)
  end
end
