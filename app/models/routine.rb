class Routine < ActiveRecord::Base
  has_and_belongs_to_many :workouts
  has_and_belongs_to_many :logs
  
  validates :name, presence: true
end
