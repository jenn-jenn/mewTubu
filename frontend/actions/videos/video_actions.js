import * as VideoAPIUtil from '../../util/video_api_util';

export const RECEIVE_CLIP= "RECEIVE_CLIP";
export const RECEIVE_CLIPS = "RECEIVE_CLIPS";
export const CLIP_ERRORS = "CLIP_ERRORS";
export const RECEIVE_QUERY = "RECEIVE_QUERY";
export const RECEIVE_CURRENT_CLIP = "RECEIVE_CURRENT_CLIP";

const receiveClips = (clips) => {
    return {
        type: RECEIVE_CLIPS,
        clips
    }; 
};

const receiveCurrentClip = (clip) => {
    return {
        type: RECEIVE_CURRENT_CLIP,
        clip
    }
}
    
const receiveClip = (clip) => {
    return {
        type: RECEIVE_CLIP, 
        clip
    };
};

const receiveClipErrors = (errors) => {
    return {
        type: CLIP_ERRORS,
        errors
    };
};

export const receiveQuery = (query) => {
    return {
        type: RECEIVE_QUERY,
        query
    }
}

// THUNK ACTION CREATORS
export const createVideo = (clip) => (dispatch) => {
    return VideoAPIUtil.createVideo(clip).then( (clip) => dispatch(receiveClip(clip)))
        .fail(err => dispatch(receiveClipErrors(err.responseJSON)));
};

export const fetchVideo = (clipId) => (dispatch) => {
    return VideoAPIUtil.fetchVideo(clipId).then( (clip) => dispatch(receiveCurrentClip(clip)))
        .fail(err => dispatch(receiveClipErrors(err.responseJSON)));
}

export const fetchVideos = (query) => (dispatch) => {
    if(query){
        return VideoAPIUtil.fetchVideos(query).then( (clips) => dispatch(receiveClips(clips)))
            .fail(err => dispatch(receiveClipErrors(err.responseJSON)));
    } else {
        return VideoAPIUtil.fetchVideos().then( (clips) => dispatch(receiveClips(clips)))
            .fail(err => dispatch(receiveClipErrors(err.responseJSON)));
    }
}

export const likeVideo = (videoId) => (dispatch) => {
    return VideoAPIUtil.likeVideo(videoId).then( (clip) => {
        return dispatch(receiveCurrentClip(clip))
    })
        .fail(err => dispatch(receiveClipErrors(err.responseJSON)));
}

export const dislikeVideo = (videoId) => (dispatch) => {
    return VideoAPIUtil.dislikeVideo(videoId).then((clip) => dispatch(receiveCurrentClip(clip)))
        .fail(err => dispatch(receiveClipErrors(err.responseJSON)));
}