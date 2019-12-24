json.extract! video, :id, :title, :description, :author_id, :comments
json.clipUrl url_for(video.clip)
json.authorName video.author.username 
json.likes video.likes.count
json.dislikes video.dislikes.count