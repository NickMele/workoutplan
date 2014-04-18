class RelateEntrySetsToEntries < ActiveRecord::Migration
  def change
    add_reference :entry_sets, :entry, index: true
  end
end
