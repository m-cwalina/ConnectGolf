# Friendships API Controller
class Api::V1::FriendshipsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create update]
  before_action :authenticate_user!

  def create
    user = current_user
    @friendship = user.friendships.build(friend_id: params[:friend_id])
    @friendship.save
  end

  def members
    @members = User.all_except(current_user).except_friends(current_user).includes(:friends)
  end

  def member_show
    @member = User.find(params[:id])
    @current_user = current_user
  end

  def friends
    @friends = current_user.friendships
  end

  def friend_show
    @friend = Friendship.find(params[:id])
  end

  def update
    user = Friendship.find(params[:id])
    friend = Friendship.find(params[:friend_id])
    user.status = 'accepted'
    friend.status = 'accepted'
    user.save
    friend.save
  end
end
