class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #
  #the line below is the default
  protect_from_forgery with: :exception
  #
  # see http://stackoverflow.com/questions/16258911/rails-4-authenticity-token
  #protect_from_forgery with: :null_session
  
  def index
    render :text => "", :layout => "application"
  end
end
