class Api::V1::FriendshipsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create
  skip_before_action :verify_authenticity_token, only: :update

  def create
    @user = current_user
    @friendship = @user.friendships.build(friend_id: params[:friend_id])
    @friendship.save
  end

  # Search for current friends
  def friends
    @friends = current_user.friendships.friends
  end

  # Search for a current friend
  def friend_show
    @friend = Friendship.find(params[:id])
  end

  # Search for requested friends requests
  def requested_friends
    @requested_friends = current_user.friendships.requested_friends
  end

  # Search for a requested friend
  def requested_friend_show
    @friend = Friendship.find(params[:id])
  end

  def pending_friends
    @pending_friends = current_user.friendships.pending_friends
  end

  def pending_friend_show
    @friend = Friendship.find(params[:id])
  end

  def update
    @friendship = Friendship.find(params[:id])
    @friendship.status = 'accepted'
    @friendship.save
  end

end
