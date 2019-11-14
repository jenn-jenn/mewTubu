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

export const fetchVideos = () => {
    return $.ajax({
        url: `/api/videos`,
        method: 'GET'
    })
}

export const fetchVideo = (clipId) => {
    // debugger
    return $.ajax({
        url: `/api/videos/${clipId}`,
        method: 'GET'
    })
}