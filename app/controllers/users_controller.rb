class UsersController < ApplicationController
  def index
    @members = User.all
  end
end
