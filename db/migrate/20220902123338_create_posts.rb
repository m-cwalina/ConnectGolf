class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :content
      t.references :club, null: false, foreign_key: true

      t.timestamps
    end
  end
end
