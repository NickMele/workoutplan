class RelateEntriesToLogs < ActiveRecord::Migration
  def change
    add_reference :entries, :log, index: true
  end
end
