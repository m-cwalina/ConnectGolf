class Api::V1::UsersController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authenticate_user!
  
  def index
    @user = current_user
  end
end
