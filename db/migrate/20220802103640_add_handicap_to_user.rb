class AddHandicapToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :handicap, :string
  end
end
