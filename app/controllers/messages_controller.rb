class MessagesController < ApplicationController
  include Tubesock::Hijack
 
  #http://stackoverflow.com/questions/5669322/turn-off-csrf-token-in-rails-3
  #skip_before_action :verify_authenticity_token, only: [:create, :update]

  respond_to :json, :html
  
  def index
   # @messages = Message.all
  end
  
  def show
  end
  
  def create
  #  chat
    #@message = Message.create!(message_params)
   # @message = MessageSocket.new
  end
  
  def m_chat
    
    hijack do |tubesock|
      tubesock.onopen do
        tubesock.send_data "Hello, message controller"
      end

      tubesock.onmessage do |data|
        params = JSON.parse(data)
        #tubesock.send_data "You said: #{data}"
        
        tubesock.send_data params['body']
        
       # message = Message.new(params)
        #tubesock.send_data message.body
      end
    end  #closes hijack
  end  #closes message_create
  

  
  private
  
  def message_params
    params.require(:message).permit(:body)
  end
end
