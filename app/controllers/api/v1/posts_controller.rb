class Api::V1::PostsController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  def index
    @posts = Post.all
  end

end
