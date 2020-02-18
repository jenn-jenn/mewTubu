export const createComment = (comment) => {
    
    const videoId = comment.video_id;
    return $.ajax({
        url: `/api/videos/${videoId}/comments`,
        method: 'POST',
        data: { comment }
    })
}

export const fetchComments = (videoId) => {
    return $.ajax({
        url: `/api/videos/${videoId}/comments`,
        method: 'GET',
    })
}

export const deleteComment = (comment) => {
    const videoId = comment.video_id;
    return $.ajax({
        url: `/api/videos/${videoId}/comments`,
        method: 'DELETE'
    })
}
