import * as VideoAPIUtil from '../../util/video_api_util';

export const RECEIVE_CLIP= "RECEIVE_CLIP";
export const RECEIVE_CLIPS = "RECEIVE_CLIPS";
export const CLIP_ERRORS = "CLIP_ERRORS";

const receiveClips = (clips) => {
    return {
        type: RECEIVE_CLIPS,
        clips
    }; 
};
    
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

// THUNK ACTION CREATORS
export const createVideo = (clip) => (dispatch) => {
    // debugger
    return VideoAPIUtil.createVideo(clip).then( (clip) => dispatch(receiveClip(clip)))
        .fail(err => dispatch(receiveClipErrors(err.responseJSON)));

    // return VideoAPIUtil.createVideo(clip).then((clip) => {
    //     debugger
    //     return dispatch(receiveClip(clip))
    //         .fail(err => {
    //             debugger
    //             dispatch(receiveClipErrors(err.responseJSON))
    //         });
    // })
};

export const fetchVideo = (clip) => (dispatch) => {
    return VideoAPIUtil.fetchVideo(clip).then( (clip) => dispatch(receiveClip(clip)))
        .fail(err => dispatch(receiveClipErrors(err.responseJSON)));
}

export const fetchVideos = () => (dispatch) => {
    return VideoAPIUtil.fetchVideos().then( (clips) => dispatch(receiveClips(clips)))
        .fail(err => dispatch(receiveClipErrors(err.responseJSON)));
}