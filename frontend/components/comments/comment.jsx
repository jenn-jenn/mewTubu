import React, { useState, useEffect } from 'react';
import { fetchAllUsers } from '../../actions/users/users_actions';

const Comments = (props) => {
    const { fetchComments, videoId, comments, users } = props
    
    useEffect(() => {
        fetchComments(videoId)
    }, [fetchComments, videoId])

    useEffect(() => {
        fetchAllUsers()
    }, [fetchAllUsers, users])


    return(
        <>
            {comments.map((comment, id) => (
                <div className="comment" key={id}>
                    <div className="comment-icon">
                        <i className="far fa-user-circle"></i>
                    </div>
                    <div className="comment-body">
                        <h6>{comment.authorName}</h6>
                        <p>{comment.body}</p>
                    </div>
                </div>
            ))}
        </>
    )
};

export default Comments;

