# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Destroying all Clubs and Users'
User.destroy_all
Club.destroy_all

puts 'Creating clubs'
Club.create!(name: 'Santa Ana Country Club', address: '20382 Newport Blvd, Santa Ana, CA 92707, United States')
puts 'Creating All Users'
50.times {User.create!(email: "#{Faker::Vehicle.manufacture}@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club:)}
