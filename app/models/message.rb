class Message
  include Mongoid::Document
  field :body, type: String
end
