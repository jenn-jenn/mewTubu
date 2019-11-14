# json.array! @videos, :id, :title, :description, :author_id
 
# json.videos do 
#     @videos.each do |video|
#         json.partial! 'video', video: video
#     end
# end

# json.users do 
#     json.set! @videos.first.user.id do
#         json.extract! @videos[0].user, :id, :username 
#     end
# end



#####
# json.array! @videos do |video|
#     json.partial! 'video', video: video
# end


@videos.each do |video|
    json.set! video.id do 
        json.partial! 'video', video: video
    end
end