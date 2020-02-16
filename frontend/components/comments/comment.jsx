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

    function handleMouse(e) {
        console.log(e.type)
        if(e.type === 'mouseenter') {
            $('.fa-ellipsis-v').css('visibility', 'visible');
        }else if(e.type === 'mouseleave') {
            $('.fa-ellipsis-v').css('visibility', 'hidden');
        }
    }

    function handleEllipsis(e) {

    }

    return(
        <>
            {comments.map((comment, id) => (
                <div className="comment" onMouseEnter={handleMouse} onMouseLeave={handleMouse} key={id}>
                    <div className="comment-section">
                        <div className="comment-icon">
                            <i className="far fa-user-circle"></i>
                        </div>
                        <div className="comment-body">
                            <h6>{comment.authorName}</h6>
                            <p>{comment.body}</p>
                        </div>
                    </div>
                    <div>
                        <li className="fas fa-ellipsis-v" onClick={handleEllipsis}></li>
                        <div className="comment-dropdown">
                            <ul>
                                <li>Edit<i className="fas fa-pencil-alt"></i></li>
                                <li>Delete <i className="far fa-trash-alt"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};

export default Comments;

