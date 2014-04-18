class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.decimal :length
      
      t.timestamps
    end
  end
end
