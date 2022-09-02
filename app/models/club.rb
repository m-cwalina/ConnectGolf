class Club < ApplicationRecord
  has_many :users
  has_many :posts, dependent: :destroy
end
