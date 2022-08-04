class FriendshipsController < ApplicationController
  def create
    @user = current_user
    @friendship = @user.friendships.build(friend_id: params[:friend_id])
    if @friendship.save
      redirect_to user_dashboard_path
    else
      redirect_to home_path
    end
  end

  def index
    @friendships = Friendship.all
  end

  def update
    @friendship = Friendship.find(params[:id])
    @friendship.status = "accepted"
    @friendship.save
    redirect_to user_dashboard_path
  end
end
