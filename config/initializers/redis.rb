
#set in environmental viariables in ~/.bashrc
#
# $redis = Redis.connect(:host => ENV['REDIS_CLOUD_HOST'], :port => ENV['REDIS_CLOUD_PORT'], :password => ENV['REDIS_CLOUD_PASSWORD'])

$redis = Rails.application.secrets.redis_cloud_host_url


