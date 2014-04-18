class CreateEntrySets < ActiveRecord::Migration
  def change
    create_table :entry_sets do |t|
      t.integer :set_number
      t.integer :weight
      t.integer :reps

      t.timestamps
    end
  end
end
