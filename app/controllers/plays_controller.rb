class PlaysController < ApplicationController
     include Tubesock::Hijack
  
  def index
  end

  def player_chat
    hijack do |tubesock|
      
       tubesock.onopen do
         tubesock.send_data "Hello, from play controller"
       end

       # Listen on its own thread
      redis_thread = Thread.new do
        redis = Redis.new(:host => ENV['REDIS_CLOUD_HOST'], :port => ENV['REDIS_CLOUD_PORT'], :password => ENV['REDIS_CLOUD_PASSWORD'])
        # Needs its own redis connection to pub
          # and sub at the same time
        redis.subscribe "play" do |on|
          on.message do |channel, data|
            a = JSON.parse(data)
            
            Rails.logger.debug("data passed into subscribe : #{data.inspect}")
            Rails.logger.debug("subscribe gets : #{a.inspect}")
            
            #here we posting to the website what redis.publish sent.
            tubesock.send_data  a['body']
          end
        end
      end 
      
      #message sent from the client enters here
      tubesock.onmessage do |m|
        # pub the message when we get one
        # note: this echoes through the sub above
        params = JSON.parse(m)
        y = params.to_json
      
        redis = Redis.new(:host => ENV['REDIS_CLOUD_HOST'], :port => ENV['REDIS_CLOUD_PORT'], :password => ENV['REDIS_CLOUD_PASSWORD'])
         redis.publish "play", y
      end
      
      tubesock.onclose do
        # stop listening when client leaves
        redis_thread.kill
      end
      
    end  
  end  
end