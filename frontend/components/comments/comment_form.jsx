import React, { useState, useEffect } from 'react';

const CommentForm = (props) => {
    const { createComment, videoId, userId } = props;
    const [body, setBody] = useState('')

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.stopPropagation();
        const comment = {
            body: body,
            author_id: userId,
            video_id: videoId
        }
        createComment(comment);
    }

    return (
        <div className="comment-form-container">
            <div>
                <i className="far fa-user-circle fa-3x"></i>
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={body}
                    onChange={handleBodyChange}
                    placeholder="Add a public comment..."
                />
                <div className="comment-form-btns">
                    <button>Cancel</button>
                    <button>Submit</button>
                </div>
                
            </form>
        </div>
    )
};

export default CommentForm;