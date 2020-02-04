json.extract! video, :id, :title, :description, :author_id, :comments
json.clipUrl url_for(video.clip)
json.authorName video.author.username 
json.likes video.likes.each do |like|
    json.extract! like, :user_id
end
json.dislikes video.dislikes.each do |dislike|
    json.extract! dislike, :user_id
end