class EntrySerializer < ActiveModel::Serializer
  attributes :id, :length
  
  has_many :entry_sets
end
