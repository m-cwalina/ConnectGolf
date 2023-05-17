class Friendship < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: 'User', foreign_key: 'friend_id'
  scope :friends, -> { where("status = 'accepted'", true) }
  scope :requested_friends, -> { where("status = 'requested'", true) }
  scope :pending_friends, -> { where("status = 'pending'", true) }
  attribute :status, :string, default: 'requested'
  after_create :create_inverse
  validates_presence_of :user_id, :friend_id, :status
  validates_uniqueness_of :user_id, scope: :friend_id
  after_destroy :destroy_inverse
  validate :check_user

  def check_user
    if self.friend_id == self.user_id
      errors.add(:friend, "can't be yourself")
    end
  end
  
  def create_inverse
    self.class.create(user_id: self.friend.id, friend_id: self.user.id, status: 'pending')
  end

  def destroy_inverse
    self.class.delete_by(user_id: self.friend.id, friend_id: self.user.id)
  end
end
