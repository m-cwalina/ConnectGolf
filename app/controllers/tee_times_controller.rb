class TeeTimesController < ApplicationController

  def index
    @tee_times = TeeTime.all
  end
end
