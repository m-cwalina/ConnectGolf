class AddAddressToClub < ActiveRecord::Migration[6.1]
  def change
    add_column :clubs, :address, :string
  end
end
