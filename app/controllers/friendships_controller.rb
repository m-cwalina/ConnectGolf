class FriendshipsController < ApplicationController
  def create
    if params.include?(:friend_id) #individual e.g. "Add friend" link
      @new_friendships = Friendship.create_reciprocal_for_ids(current_user_id, params[:friend_id])
    else
      params[:user][:friend_ids].each do |f_id|
        @new_friendships = Friendship.create_reciprocal_for_ids(current_user_id, f_id)
      end
    end
  end
end
