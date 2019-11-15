# README

## MewTubu

Live application: [MewTubu](https://mewtubu.herokuapp.com/#/)

### Overview
MewTubu is a Youtube clone that includes user authentication, index/show pages for videos, and upload page. You are able to login/signup, upload and play videos.

### Technologies
+ Rails, Postgresql
+ S3 from Amazon Web Services
+ React and Redux

### Feature Highlights

#### User authentication
Users are able to either sign up/login through this page. Actual passwords are not saved. Instead, bcrypt is used for hashing the passwords, and uses methods to match passwords when logging in a new session.

![alt text](https://github.com/jenn-jenn/mewTubu/blob/master/app/assets/images/login.png "Login Page")

#### Upload Page
This page allows user to upload videos, which then redirects to another page that allows for title and description input.

![alt text](https://github.com/jenn-jenn/mewTubu/blob/master/app/assets/images/select.png "Upload Page")

#### Index/Show Pages
Videos are shown on these pages and each is a link to their individual show page.

![alt text](https://github.com/jenn-jenn/mewTubu/blob/master/app/assets/images/index2.png "Index Page")
![alt text](https://github.com/jenn-jenn/mewTubu/blob/master/app/assets/images/show.png "Show Page")

### Challenges
Toughest part was trying to get the project to work with WSL (Windows Subsystem Linux) on a Windows 10. Using S3 from AWS required that I use their ca certificate bundle, so I had to make sure to insert the `Aws.use_bundled_cert!` method in the correct place. Another related problem is that I need to set my SSL's environment variables in order to use Ruby's `open-uri`.

#### Future Goal
+ Be able to upload using a modal popup instead
+ Better layout styling
+ Be able to load videos on page faster
+ Be able to refactor code and utilize Redux better