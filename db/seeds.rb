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

demo = User.find_by(email: 'demo')
pixabay = User.find_by(email: 'user1@gmail.com')
ruvim = User.find_by(email: 'user2@gmail.com')
jake = User.find_by(email: 'user3@gmail.com')
peter = User.find_by(email: 'user4@gmail.com')
engin = User.find_by(email: 'user5@gmail.com')
pressmaster = User.find_by(email: 'user6@gmail.com')
taryn = User.find_by(email: 'user7@gmail.com')

evening = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/evening.mp4")
seaside = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/seaside.mp4")
puppy = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/puppy.mp4")
biking = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/biking.mp4")
lights = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/lights.mp4")

# sunset = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/sunset_view.mp4")
# cat = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/cat.mp4")
# waterfall = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/waterfall.mp4")
# oldman = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/oldman.mp4")
# building = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/modernbuilding.mp4")
# snow = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/snow.mp4")
# bridge = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/bridge.mp4")
# skyview = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/sky.mp4")
# whitedog = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/whitedog.mp4")
# snowmountain = open("https://mewtubu-seed.s3-us-west-1.amazonaws.com/snowmountain.mp4")


Video.create!( title: 'Biking along', description: 'Biking and chatting by Pressmaster@Pexels', author_id: pressmaster.id).clip.attach(io: biking, filename: 'biking.mp4')
Video.create!( title: 'Puppy', description: 'By Magda Ehlers@Pexels', author_id: demo.id ).clip.attach(io: puppy, filename: 'puppy.mp4')
Video.create!( title: 'Seaside', description: 'Seaside By Peter Fowler@Pexels', author_id: peter.id ).clip.attach(io: seaside, filename: 'seaside.mp4')
Video.create!( title: 'Evening', description: 'Evening By Pixabay@Pexels', author_id: pixabay.id ).clip.attach(io: evening, filename: 'evening.mp4')
Video.create!( title: 'Lights', description: 'Lights along a rive by Distill@Pexels', author_id: demo.id ).clip.attach(io: lights, filename: 'lights.mp4')


# Video.create!( title: 'Sunset View', description: ' Sunset View by Pixabay@Pexels', author_id: pixabay.id).clip.attach(io: sunset, filename: 'sunset.mp4')
# Video.create!( title: 'Sleeping Cat', description: 'Kitty Sleeping by Jake Heinemann@Pexels', author_id: jake.id).clip.attach(io: cat, filename: 'cat.mp4')
# Video.create!( title: 'Waterfall', description: 'Waterfall by Engin Akyurt@Pexels', author_id: engin.id).clip.attach(io: waterfall, filename: 'waterfall.mp4')
# Video.create!( title: 'Oldman Walking', description: 'Oldman Walking by Pixabay@Pexels', author_id: pixabay.id ).clip.attach(io: oldman, filename: 'oldman.mp4')
# Video.create!( title: 'Modern Building', description: 'Modern Building by Taryn Elliott@Pexels', author_id: taryn.id).clip.attach(io: building, filename: 'building.mp4')
# Video.create!( title: 'Slow-motion Snow', description: 'By Mihail Strelko@Pexels', author_id: demo.id).clip.attach(io: snow, filename: 'snow.mp4')
# Video.create!( title: 'Bridge', description: 'Aerial Bridge By Ruvim Miksanskiy@Pexels', author_id: ruvim.id ).clip.attach(io: bridge, filename: 'bridge.mp4')
# Video.create!( title: 'Skyview', description: 'Skyview By Pixabay@Pexels', author_id: pixabay.id ).clip.attach(io: skyview, filename: 'skyview.mp4')
# Video.create!( title: 'White Dog', description: 'White Dog By Pixabay@Pexels', author_id: pixabay.id).clip.attach(io: whitedog, filename: 'whitedog.mp4')
# Video.create!( title: 'Snow Mountain', description: 'Snow Mountain By PhotoMIX@Pexels', author_id: demo.id).clip.attach(io: snowmountain, filename: 'snowmountain.mp4')




