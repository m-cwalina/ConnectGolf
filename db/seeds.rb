# This file should contain all the record creation needed to seed the database with its default values.

puts 'Destroying all Clubs, Users, and Friendships'
User.destroy_all
Club.destroy_all
Friendship.destroy_all



puts 'Creating clubs'
santa_ana = Club.create!(name: 'Santa Ana Country Club', address: '20382 Newport Blvd, Santa Ana, CA 92707, United States')

puts 'Creating some posts'
Post.create!([
  { content: 'We have an awesome tournament this week! You can still sign up in the proshop. Come on by, singles are welcomed', club_id: santa_ana.id},
  { content: 'Awesome news. The greens are rolling at a 12 and they weather today is amazing. Enjoy a quick 9 or full 18 today', club_id: santa_ana.id}
  ])
puts 'Creating All Users'
User.create!([
  {email: "1@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "2@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "3@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "4@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "5@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "6@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "7@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "8@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "9@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "10@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "11@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "12@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "13@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "14@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "15@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "16@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "17@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "18@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "19@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "20@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "21@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "22@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "23@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "24@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "25@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "26@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "27@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "28@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "29@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "30@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  {email: "31@gmail.com", name: Faker::Name.name, password: 'password', age: rand(15..100), handicap: rand(0..35), club_id: santa_ana.id},
  ])
