class CreateLogs < ActiveRecord::Migration
  def change
    create_table :logs do |t|
      t.date :date

      t.timestamps
    end
  end
end
