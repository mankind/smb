class ChatController < ApplicationController
  include Tubesock::Hijack
  
  def index
  end

  def chat
    hijack do |tubesock|
      
       tubesock.onopen do
         tubesock.send_data "Hello, friend"
       end

       # Listen on its own thread
      redis_thread = Thread.new do
        
        redis = Redis.new(:host => ENV['REDIS_CLOUD_HOST'], :port => ENV['REDIS_CLOUD_PORT'], :password => ENV['REDIS_CLOUD_PASSWORD'])

        # Needs its own redis connection to pub
          # and sub at the same time
        redis.subscribe "chat" do |on|
          on.message do |channel, data|
            a = JSON.parse(data)
            puts a
            Rails.logger.debug("data passed into subscribe : #{data.inspect}")
            Rails.logger.debug("subscribe gets : #{a.inspect}")
            
            #here we are postig to the website content recived from redis.publish
            tubesock.send_data  a['body']
          end
        end
      end #closes redis_thread
      
      #message sent from the client enters here
      tubesock.onmessage do |m|
        # pub the message when we get one
        # note: this echoes through the sub above

        params = JSON.parse(m)
        Rails.logger.debug("logging params: #{params.inspect}")
        message = Message.new(params)
        Rails.logger.debug("logging message: #{message.inspect}")
        m = message.to_json
      
        Rails.logger.debug("logging to_json : #{m.inspect}")
        
        ##this doesn't display on the website
        redis = Redis.new(:host => ENV['REDIS_CLOUD_HOST'], :port => ENV['REDIS_CLOUD_PORT'], :password => ENV['REDIS_CLOUD_PASSWORD'])
        redis.publish "chat", m
      end
      
      tubesock.onclose do
        # stop listening when client leaves
        redis_thread.kill
      end
      
    end  #closes hijack block
  end  #closes def chat
  
  #def show
 # end
  
end