export const createComment = (comment) => {
    debugger
    const videoId = comment.video_id
    return $.ajax({
        url: `/api/videos/${videoId}/comments`,
        method: 'POST',
        data: { comment }
    })
}