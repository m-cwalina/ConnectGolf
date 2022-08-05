class FriendshipsController < ApplicationController
  def create
    @user = current_user
    @friendship = @user.friendships.build(friend_id: params[:friend_id])
    @friendship.save
    redirect_to user_dashboard_path
  end

  def index
    @friendships = Friendship.where(user_id: current_user.id)
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

  # rounded = (2.3.to_f/0.5).round * 0.5
  # fulls = rounded.to_i
  # full_star = fulls.times { puts 'full'}
  # halfs = (rounded - rounded.to_i)\0.5
  # half_star = halfs.to_i.times { puts 'half'}
  # emptys = 5 - fulls - halfs
  # empty_star = emptys.to_i.times { puts 'empty'}
  # string = `#{full_star} + #{half_star} + #{empty_star}`
