import React, { useState, useEffect } from 'react';
import { fetchAllUsers } from '../../actions/users/users_actions';

const Comments = (props) => {
    const { fetchComments, videoId, comments, users, currentUser } = props
    
    useEffect(() => {
        fetchComments(videoId)
    }, [fetchComments, videoId])

    useEffect(() => {
        fetchAllUsers()
    }, [fetchAllUsers, users])

    function handleMouse(id, e) {
        if(currentUser.id == id) {
            if(e.type === 'mouseenter') {
                $('.fa-ellipsis-v').css('visibility', 'visible');
            }else if(e.type === 'mouseleave') {
                $('.fa-ellipsis-v').css('visibility', 'hidden');
            }
        }
    }

    function handleEllipsis(e) {
        e.preventDefault();
        $('#comment-dropdown').toggle();
    }


    function handleClick(type, e) {
        e.preventDefault();
        if(type === 'edit') {

        } else if(type == 'delete') {

        }
    }

    return(
        <>
            {comments.map((comment, id) => (
                <div className="comment" onMouseEnter={handleMouse.bind(this, comment.authorId)} onMouseLeave={handleMouse.bind(this, comment.authorId) } key={id}>
                    <div className="comment-section">
                        <div className="comment-icon">
                            <i className="far fa-user-circle"></i>
                        </div>
                        <div className="comment-body">
                            <h6>{comment.authorName}</h6>
                            <p>{comment.body}</p>
                        </div>
                    </div>
                        {/* <div className="options">
                            <div className="ellipse">
                                <li className="fas fa-ellipsis-v" onClick={handleEllipsis}></li>
                            </div>
                            <div id="comment-dropdown">
                                <ul className="edit-delete">
                                    <li onClick={handleClick.bind(this, 'edit')}><i className="fas fa-pencil-alt"></i>Edit</li>
                                    <li onClick={handleClick.bind(this, 'delete')}><i className="far fa-trash-alt"></i>Delete</li>
                                </ul>
                            </div>
                        </div> */}
                </div>
            ))}
        </>
    )
};

export default Comments;

