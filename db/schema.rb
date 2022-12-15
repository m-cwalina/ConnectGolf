# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_15_174313) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "tee_time_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "size", default: 0
    t.index ["tee_time_id"], name: "index_bookings_on_tee_time_id"
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

  create_table "clubs", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.string "address"
  end

  create_table "friendships", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "friend_id"
    t.string "status"
    t.index ["user_id"], name: "index_friendships_on_user_id"
  end

  create_table "groups", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "booking_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["booking_id"], name: "index_groups_on_booking_id"
    t.index ["user_id"], name: "index_groups_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.text "content"
    t.bigint "club_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "picture"
    t.index ["club_id"], name: "index_posts_on_club_id"
  end

  create_table "scores", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_scores_on_user_id"
  end

  create_table "tee_times", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "time"
    t.integer "players", default: 4
    t.boolean "check_in", default: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "age"
    t.string "handicap"
    t.string "name"
    t.bigint "club_id", null: false
    t.string "picture"
    t.index ["club_id"], name: "index_users_on_club_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "bookings", "tee_times"
  add_foreign_key "bookings", "users"
  add_foreign_key "friendships", "users"
  add_foreign_key "groups", "bookings"
  add_foreign_key "groups", "users"
  add_foreign_key "posts", "clubs"
  add_foreign_key "scores", "users"
  add_foreign_key "users", "clubs"
end
