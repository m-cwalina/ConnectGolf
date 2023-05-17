# Friendships API Controller
class Api::V1::FriendshipsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create update]
  before_action :authenticate_user!

  def create
    friendship = current_user.friendships.build(friend_id: params[:friend_id])
    friendship.save
  end

  def index
    @friends = current_user.friendships
  end

  def show
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
