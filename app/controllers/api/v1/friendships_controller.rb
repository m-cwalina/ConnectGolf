class Api::V1::FriendshipsController < ApplicationController

  def create
    @user = current_user
    @friendship = @user.friendships.build(friend_id: params[:friend_id])
    @friendship.save
    redirect_to user_dashboard_path
  end

  def index
    @friendships = current_user.friendships.all
  end

  def show
    @friendship = Friendship.find(params[:id])
  end

  def update
    @friendship = Friendship.find(params[:id])
    @friendship.status = "accepted"
    if @friendship.save
      redirect_to user_dashboard_path
    else
      redirect_to home_path
    end
  end
end