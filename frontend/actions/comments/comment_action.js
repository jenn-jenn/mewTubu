import * as CommentAPIUtil from '../../util/comments_api_util';

export const RECEIVE_A_COMMENT = "RECEIVE_A_COMMENT"
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS"
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS"
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS"

const receiveAComment = (comment) => {
    debugger
    return {
        type: RECEIVE_A_COMMENT,
        comment
    }
}

const receiveAllComments = (comments) => {
        debugger
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    }
}
const receiveCommentErrors = (errors) => {
    return {
        type: RECEIVE_COMMENT_ERRORS,
        errors
    }
}

const receiveClearCommentErrors = () => {
    return {
        type: CLEAR_COMMENT_ERRORS
    }
}

export const createComment = (comment) => (dispatch) => {
    return CommentAPIUtil.createComment(comment)
        .then( (comment) => {
            return dispatch(receiveAComment(comment))
        })
        .fail( (err) => dispatch(receiveCommentErrors(err.responseJSON)));
}

export const fetchAllComments = (videoId) => (dispatch) => {
    return CommentAPIUtil.fetchComments(videoId)
        .then( (comments) => {
            return dispatch(receiveAllComments(comments))
        })
        .fail( (err) => dispatch(receiveCommentErrors(err.responseJSON)))
}



