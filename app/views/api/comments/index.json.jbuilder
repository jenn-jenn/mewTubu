@comments.each do |comment|
    json.set! comment.id do 
        json.extract! json.extract! :id, :body, :author_id, :video_id
    end
end