export const createVideo = (clip) => {
    return $.ajax({
        url: `/api/videos`,
        method: 'POST',
        data: clip
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