class CreateRoutines < ActiveRecord::Migration
  def change
    create_table :routines do |t|
      t.string :name
      t.text :days, array: true, null: true, default: '{}'
      t.timestamps
    end
  end
end
