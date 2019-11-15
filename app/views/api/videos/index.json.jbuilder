@videos.each do |video|
    json.set! video.id do 
        json.partial! 'video', video: video
    end
end


