json.extract! video, :id, :title, :description, :author_id, :comments
json.clipUrl url_for(video.clip)
json.authorName video.author.username 
json.likes video.likes
json.dislikes video.dislikes