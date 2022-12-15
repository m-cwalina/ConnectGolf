# Friendships API Controller
class Api::V1::FriendshipsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create update]
  before_action :authenticate_user!

  # Create the friendship
  def create
    @user = current_user
    @friendship = @user.friendships.build(friend_id: params[:friend_id])
    @friendship.save
  end

  def members
    @members = User.all_except(current_user).except_friends(current_user)
  end

  def member_show
    @member = User.find(params[:id])
    @current_user = current_user
  end

  # Search for current friends
  def friends
    @friends = current_user.friendships
  end

  # Show a current friend
  def friend_show
    @friend = Friendship.find(params[:id])
  end

  # Update a friendship to accepted. This is probably dangerous
  def update
    @friendship = Friendship.find(params[:id])
    inverse_friendship = Friendship.find(params[:id].to_i - 1)
    @friendship.status = 'accepted'
    inverse_friendship.status = 'accepted'
    @friendship.save
    inverse_friendship.save
  end
end
