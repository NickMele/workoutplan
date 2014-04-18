class Entry < ActiveRecord::Base
  belongs_to :log
  belongs_to :workout
  has_many :entry_sets
end
