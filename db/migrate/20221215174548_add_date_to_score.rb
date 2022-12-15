class AddDateToScore < ActiveRecord::Migration[6.1]
  def change
    add_column :scores, :date, :datetime
  end
end
