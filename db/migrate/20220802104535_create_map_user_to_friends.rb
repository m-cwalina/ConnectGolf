class CreateMapUserToFriends < ActiveRecord::Migration[6.1]
  def change
    create_table :map_user_to_friends do |t|
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
