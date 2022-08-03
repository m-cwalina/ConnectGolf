class RenameMapUserToFriendToFriendship < ActiveRecord::Migration[6.1]
  def change
    rename_table :map_user_to_friends, :friendships
  end
end
