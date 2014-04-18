# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# workouts = Workout.create([{ name: 'Leg Press'}, { name: 'Leg Curl'}])
# Routine.create(name: 'Legs', days: [1,2,3], workouts: workouts)

# workouts = Workout.all()
# logs = Log.create([{date: Time.now}])
# Routine.create(name: 'Test', days: [1], workouts: workouts, logs: logs)

# log = Log.all().first()
# workout = Workout.all().first()
# entry = Entry.all().first()
# log.update(entries: [entry])

entry = Entry.all().first()
sets = EntrySet.create([{set_number: 1, weight: 100, reps: 10},{set_number: 2, weight: 100, reps: 10},{set_number: 3, weight: 100, reps: 10}])
entry.update(entry_sets: sets)