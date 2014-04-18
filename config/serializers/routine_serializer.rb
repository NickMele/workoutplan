class RoutineSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name, :days
  
  has_many :workouts, key: 'workouts'
  has_many :logs, key: 'logs'
end
