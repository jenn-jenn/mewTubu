# README

## MewTubu

### Overview
MewTubu is a Youtube clone that includes user authentication, index/show pages for videos, and upload page. Users are able to login/signup, upload and play videos.

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

![alt text](https://user-images.githubusercontent.com/16752858/73131630-92114780-3fc3-11ea-865d-4e71466fd60c.png "Upload Page")

#### Index/Show Pages
Videos are shown on these pages and each is a link to their individual show page.

![alt text](https://user-images.githubusercontent.com/16752858/71639300-e0336500-2c28-11ea-9800-bc5feb68c3a8.png "Index Page")
![alt text](https://user-images.githubusercontent.com/16752858/71639322-53d57200-2c29-11ea-876f-4f30e5a56f73.png "Show Page")

### Challenges
Toughest part was trying to get the project to work with WSL (Windows Subsystem Linux) on a Windows 10. Using S3 from AWS required that I use their ca certificate bundle, so I had to make sure to insert the `Aws.use_bundled_cert!` method in the correct place. Another related problem is that I need to set my SSL's environment variables in order to use Ruby's `open-uri`.

### Code Snippets
For `likes` and `dislikes`, I included a check to see if the `current_user` had already liked the video or not. This allows me to remove a like when the user clicks on the like button again. The same goes for dislikes.

``` ruby
    def already_liked?
        Like.where(user_id: current_user.id, video_id: params[:video_id]).exists?
    end
```

Depending on whether there's a query or just showing the index page, I checked for the type of the videos. If the videos is an Array, then it contains videos, otherwise it is the query. From there, I will do an API call to the backend to retrieve the videos with titles that include that keyword.

```javascript
    componentDidMount() { 
        this.props.fetchAllUsers();
        
        if(Array.isArray(this.props.videos)) {
            this.props.fetchVideos().then(() => {
                this.setState({ isArray: Array.isArray(this.props.videos)})
            })
        } else {
            this.word = this.props.videos;
            this.props.fetchVideosWithQuery(this.props.videos).then(() => {
                this.setState({ isArray: Array.isArray(this.props.videos) })
            })
        }
    }
```

#### Future Goal
+ Be able to upload using a modal popup instead
+ Better layout styling
+ Be able to load videos on page faster
+ Be able to refactor code and utilize Redux better
