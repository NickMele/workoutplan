class Workout < ActiveRecord::Base
  has_and_belongs_to_many :routines
  has_many :entries
  
  validates :name, presence: true
end
