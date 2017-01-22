class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def layout
    render text: nil, layout: true
  end
end
