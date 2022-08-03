class RemoveFriendsFromFriendship < ActiveRecord::Migration[6.1]
  def change
    remove_reference :friendships, :friend, null: false, foreign_key: true
  end
end
