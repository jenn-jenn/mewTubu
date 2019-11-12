export const createVideo = (clip) => {
    const userId = clip.get('video[author_id]');
    // debugger
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

export const fetchVideo = (clip) => {
    return $.ajax({
        url: `/api/videos/${clip.id}`,
        method: 'GET'
    })
}