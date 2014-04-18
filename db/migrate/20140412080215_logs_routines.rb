class LogsRoutines < ActiveRecord::Migration
  create_table :logs_routines, id: false do |t|
    t.belongs_to :routine
    t.belongs_to :log
  end
  def change
  end
end
