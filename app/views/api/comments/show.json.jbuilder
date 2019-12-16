json.set! @comment.id do
    json.extract! :id, :body, :author_id, :video_id
end