# This file should contain all the record creation needed to seed the database with its default values.

puts 'Destroying all Clubs, Users, and Friendships'
User.destroy_all
Club.destroy_all
Friendship.destroy_all
TeeTime.destroy_all

puts 'Creating clubs'
santa_ana = Club.create!(name: 'Santa Ana Country Club',
                         address: '20382 Newport Blvd, Santa Ana, CA 92707, United States')

puts 'Creating some Posts'

Post.create!([{ content: 'We have an awesome tournament this week! You can still sign up in the proshop.
                          Come on by, singles are welcomed',
                club_id: santa_ana.id,
                picture: 'https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/course-photos-for-places-to-play/Clear%20Creek%20Tahoe%20Hole%209(1).jpg.rend.hgtvcom.966.644.suffix/1651155329127.jpeg' },
              { content: 'Awesome news. The greens are rolling at a 12 and they weather today is amazing.
                          Enjoy a quick 9 or full 18 today',
                club_id: santa_ana.id,
                picture: 'https://golf-pass.brightspotcdn.com/dims4/default/acaaab9/2147483647/strip/true/crop/5184x2915+0+271/resize/900x506!/quality/90/?url=https%3A%2F%2Fgolf-pass-brightspot.s3.amazonaws.com%2Fc6%2F4d%2F79cef31b13be5017b7325fc2bb82%2Fp.php' }])

puts 'Creating all Users'

(1..200).map do |num|
  User.create!([{ email: (num.to_i).to_s + '@gmail.com',
                  picture: Faker::Avatar.image,
                  name: Faker::Name.name,
                  password: 'password',
                  age: rand(15..90),
                  handicap: rand(0..28),
                  club_id: santa_ana.id }])
end

puts 'Creating Tee Times'

def time_iterate(start_time, end_time, step, &_block)
  while (start_time += step) <= end_time
    yield(start_time)
  end
end

(DateTime.now..DateTime.now + 100.days).each do |date|
  opening_time = date.change(hour: 7).to_time
  closing_time = date.change(hour: 18).to_time
  time_iterate(opening_time, closing_time, 900) do |time|
    TeeTime.create!([{ time: time }])
  end
end

1000.times { Booking.create!([{ size: rand(1..4),
                                user_id: rand(1..200),
                                tee_time_id: rand(1..4200) }])
}

1000.times {
  Score.create!([{
    user_id: rand(1..200),
    score: rand(68..105)
  }])
}
