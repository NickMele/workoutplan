class LogSerializer < ActiveModel::Serializer
  attributes :id, :date
  
  has_many :entries
end
