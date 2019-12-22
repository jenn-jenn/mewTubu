@comments.each do |comment|
    json.set! comment.id do
        json.partial! 'comment', comment: comment
        json.authorName comment.author.username
    end
end