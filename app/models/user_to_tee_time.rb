class UserToTeeTime < ApplicationRecord
  belongs_to :user
  belongs_to :tee_time
end
