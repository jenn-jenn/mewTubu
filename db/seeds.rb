require 'open-uri'
# require 'aws-sdk-s3'
# require 'openssl'

# Aws.use_bundled_cert!
User.delete_all
Video.delete_all

User.create!( username: 'demo', email: 'demo', password: '123456')
User.create!( username: 'Pixabay', email: 'user1@gmail.com', password: '123456')
User.create!( username: 'Ruvim Miksanskiy', email: 'user2@gmail.com', password: '123456')
User.create!( username: 'Jake Heinemann', email: 'user3@gmail.com', password: '123456')
User.create!( username: 'Peter Fowler', email: 'user4@gmail.com', password: '123456')
User.create!( username: 'Engin Akyurt', email: 'user5@gmail.com', password: '123456')
User.create!( username: 'Pressmaster', email: 'user6@gmail.com', password: '123456')
User.create!( username: 'Taryn Elliott', email: 'user7@gmail.com', password: '123456')

# demo = User.find_by(email: 'demo')
# pixabay = User.find_by(email: 'user1@gmail.com')
# ruvim = User.find_by(email: 'user2@gmail.com')
# jake = User.find_by(email: 'user3@gmail.com')
# peter = User.find_by(email: 'user4@gmail.com')
# engin = User.find_by(email: 'user5@gmail.com')
# pressmaster = User.find_by(email: 'user6@gmail.com')
# taryn = User.find_by(email: 'user7@gmail.com')

# evening = open("https://mewtubu-seeds.s3-us-west-1.amazonaws.com/evening.mp4")
# seaside = open("https://mewtubu-seeds.s3-us-west-1.amazonaws.com/seaside.mp4")
# cat = open("https://mewtubu-seeds.s3-us-west-1.amazonaws.com/cat.mp4")
# biking = open("https://mewtubu-seeds.s3-us-west-1.amazonaws.com/biking.mp4")
# lights = open("https://mewtubu-seeds.s3-us-west-1.amazonaws.com/lights.mp4")


# Video.create!( title: 'Biking along', description: 'Biking and chatting @Pixabay', author_id: pressmaster.id).clip.attach(io: biking, filename: 'biking.mp4')
# Video.create!( title: 'Cat', description: 'cat @Pixabay', author_id: demo.id ).clip.attach(io: cat, filename: 'cat.mp4')
# Video.create!( title: 'Seaside', description: 'Seaside @Pixabay', author_id: peter.id ).clip.attach(io: seaside, filename: 'seaside.mp4')
# Video.create!( title: 'Evening', description: 'Evening @Pixabay', author_id: pixabay.id ).clip.attach(io: evening, filename: 'evening.mp4')
# Video.create!( title: 'Lights', description: 'Lights along a river @Pixabay', author_id: demo.id ).clip.attach(io: lights, filename: 'lights.mp4')



