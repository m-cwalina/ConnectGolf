class DropGroups < ActiveRecord::Migration[6.1]
  def change
    drop_table :groups do |t|
      t.timestamps null: false
    end
  end
end
