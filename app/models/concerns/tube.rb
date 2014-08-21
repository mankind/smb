require 'celluloid'
require 'tubesock'

module Tube
  extend ActiveSupport::Concern
  include Celluloid
  include Tubesock::Hijack
  
 # def initialize(params)
 #   @params = params  
 # end
  
  def create
    
    hijack do |tubesock|
      tubesock.onopen do
        tubesock.send_data "Hello, friend"
      end

      tubesock.onmessage do |data|
       # tubesock.send_data "You said: #{data}"
        params = data
        message = Message.new(params)
        return message
      end
    end  #closes hijack
    
  end  #closes message_create
  
  
end