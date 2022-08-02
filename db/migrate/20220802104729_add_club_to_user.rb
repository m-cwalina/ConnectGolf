class AddClubToUser < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :club, null: false, foreign_key: true
  end
end
