import React, { useState, useEffect } from 'react';

const CommentForm = (props) => {
    const txt = document.getElementsByTagName('textarea')[0];
    const { createComment, videoId, userId } = props;
    const [body, setBody] = useState('');

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
        createComment(comment).then( () => {
            setBody("");
            txt.style.height = "34px";
        })
    }

    const handleResize = (e) => {
        if(e.target.value === "") {
            txt.style.height = "34px";
        } else {
            txt.style.height = e.target.scrollHeight + 'px';
        }
        
        
    }

    const handleCancel = (e) => {
        e.stopPropagation();
        setBody("");
        txt.style.height = "34px";
    }

    return (
        <div className="comment-form-container">
            <div>
                <i className="far fa-user-circle fa-3x"></i>
            </div>
            <form onSubmit={handleSubmit}>
                <textarea 
                    type="text"
                    value={body}
                    onChange={handleBodyChange}
                    onInput={handleResize}
                    placeholder="Add a public comment..."
                />
                <div className="comment-form-btns">
                    <button onClick={handleCancel}>Cancel</button>
                    <button>Submit</button>
                </div>
                
            </form>
        </div>
    )
};

export default CommentForm;