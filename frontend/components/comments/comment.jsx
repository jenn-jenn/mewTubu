import React, { useState, useEffect } from 'react';
import { fetchAllUsers } from '../../actions/users/users_actions';

const Comments = (props) => {
    const { fetchComments, deleteComment, videoId, comments, users, currentUser } = props
    
    useEffect(() => {
        fetchComments(videoId)
    }, [fetchComments, videoId])

    useEffect(() => {
        fetchAllUsers()
    }, [fetchAllUsers, users])

    function handleMouse(id, e) {
        if(currentUser.id == id) {
            if(e.type === 'mouseenter') {
                // $('.fa-ellipsis-v').css('visibility', 'visible');
                // $(`[data-comment-ellipsis="${e.target.dataset.commentId}"]`).css('visibility', 'visible');
                $(`[data-comment-ellipsis="${e.target.dataset.commentId}"]`).toggle();

            }else if(e.type === 'mouseleave') {
                // $('.fa-ellipsis-v').css('visibility', 'hidden');
                // $(`[data-comment-ellipsis="${e.target.dataset.commentId}"]`).
                $(`[data-comment-ellipsis="${e.target.dataset.commentId}"]`).toggle();
            }
        }
    }

    function handleEllipsis(e) {
        e.preventDefault();
        $(`[data-comment-dropdown="${e.target.dataset.commentEllipsis}"]`).toggle();
        // $('#comment-dropdown').toggle();
    }


    function handleClick(type, e) {
        e.preventDefault();
        debugger
        if(type === 'edit') {
            console.log('editinggg')
            // console.log($('#body-of-comment').text());

        } else if(type == 'delete') {
            // deleteComment()
            deleteComment(e.target.dataset.delete, videoId)

        }
    }

    function checkDropdown(e) {
        e.preventDefault();
        debugger
        if($('#comment-dropdown').css('display') === 'block') {
            // console.log('dropdown showing')
        }
    }

    function showDelete(commentId) {
        (currentUser.id === commentId) ? <i onClick={handleClick.bind(this, 'delete')} className="far fa-trash-alt" title="Delete" data-delete={comment.id}></i> : null
    }

    return(
        <>
            {comments.map((comment, id) => (
                <div className="comment" onMouseEnter={handleMouse.bind(this, comment.authorId)} onMouseLeave={handleMouse.bind(this, comment.authorId) } key={id} data-comment-id={comment.id}>
                    <div className="comment-section">
                        <div className="comment-icon">
                            <i className="far fa-user-circle"></i>
                        </div>
                        <div className="comment-body">
                            <h6>{comment.authorName}</h6>
                            <p id="body-of-comment">{comment.body}</p>
                        </div>
                    </div>
                        <div className="options">
                            {/* <i onClick={handleClick.bind(this, 'edit')} className="fas fa-pencil-alt" title="Edit" data-edit={comment.id}></i> */}
                            {/* <i onClick={handleClick.bind(this, 'delete')} className="far fa-trash-alt" title="Delete" data-delete={comment.id}></i> */}
                            {showDelete(comment.id)}
                        </div>
                </div>
            ))}
        </>
    )
};

export default Comments;

