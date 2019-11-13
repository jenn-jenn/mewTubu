# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Video.delete_all

User.create!(
    username: 'demo',
    email: 'demo',
    password: '123456'
)

User.create!(
    username: 'user1',
    email: 'user1@gmail.com',
    password: '123456'
)

User.create!(
    username: 'user2',
    email: 'user2@gmail.com',
    password: '123456'
)

User.create!(
    username: 'user3',
    email: 'user3@gmail.com',
    password: '123456'
)

User.create!(
    username: 'user4',
    email: 'user4@gmail.com',
    password: '123456'
)