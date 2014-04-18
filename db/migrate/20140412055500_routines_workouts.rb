class RoutinesWorkouts < ActiveRecord::Migration
  create_table :routines_workouts, id: false do |t|
    t.belongs_to :routine
    t.belongs_to :workout
  end
  def change
  end
end
