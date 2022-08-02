class MapUserToFriendsController < ApplicationController
  def create
    @user = current_user
    @friend = User.find(params[:id])
    @user.friend = @friend
    @friend.save
    redirect_to user_dashboard_path
  end
end
