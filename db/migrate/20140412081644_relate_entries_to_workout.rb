class RelateEntriesToWorkout < ActiveRecord::Migration
  def change
    add_reference :entries, :workout, index: true
  end
end
