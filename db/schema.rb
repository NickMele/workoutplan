# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140412083407) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "entries", force: true do |t|
    t.decimal  "length"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "log_id"
    t.integer  "workout_id"
  end

  add_index "entries", ["log_id"], name: "index_entries_on_log_id", using: :btree
  add_index "entries", ["workout_id"], name: "index_entries_on_workout_id", using: :btree

  create_table "entry_sets", force: true do |t|
    t.integer  "set_number"
    t.integer  "weight"
    t.integer  "reps"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "entry_id"
  end

  add_index "entry_sets", ["entry_id"], name: "index_entry_sets_on_entry_id", using: :btree

  create_table "logs", force: true do |t|
    t.date     "date"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "logs_routines", id: false, force: true do |t|
    t.integer "routine_id"
    t.integer "log_id"
  end

  create_table "routines", force: true do |t|
    t.string   "name"
    t.text     "days",       default: [], array: true
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "routines_workouts", id: false, force: true do |t|
    t.integer "routine_id"
    t.integer "workout_id"
  end

  create_table "workouts", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
