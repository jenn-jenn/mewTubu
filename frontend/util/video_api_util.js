export const createVideo = (clip) => {
    const userId = clip.get('video[author_id]');
    return $.ajax({
        url: `/api/users/${userId}/videos`,
        method: 'POST',
        data: clip,
        contentType: false,
        processData: false
    })
}

export const fetchVideos = (query) => {
    return $.ajax({
        url: `/api/videos`,
        method: 'GET',
        data: { query }
    })
}

export const fetchVideo = (clipId) => {
    return $.ajax({
        url: `/api/videos/${clipId}`,
        method: 'GET'
    })
}

export const likeVideo = (videoId) => {
    return $.ajax({
        url: `/api/videos/${videoId}/likes`,
        method: 'POST'        
    })
}

export const dislikeVideo = (videoId) => {
    return $.ajax({
        url: `/api/videos/${videoId}/dislikes`,
        method: 'POST',
    })
}