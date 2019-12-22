import React, { useState, useEffect } from 'react';

const Comments = (props) => {
    const { fetchComments, videoId, comments } = props
    useEffect(() => {
        fetchComments(videoId)
        
    }, [fetchComments, videoId])


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

