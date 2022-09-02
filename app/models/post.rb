class Post < ApplicationRecord
  belongs_to :club
  validates :content, presence: true
end
