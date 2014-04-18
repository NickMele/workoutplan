class WorkoutSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name
  
  has_many :entries, key: 'entries'
end
