import React, { useState, useEffect } from 'react';

const Comments = (props) => {
    debugger
    const { fetchComments, videoId } = props
    const [comments, setComments] = useState([])

    useEffect(() => {
        setComments(fetchComments(videoId)) 
    }, [])
    return(
        <>
            {/* {comments.map((comment, id) => (
                <div className="comment" key={id}>
                    <div>
                        <i className="far fa-user-circle fa-4x"></i>
                    </div>
                    <div>
                        <h6>Author</h6>
                        <p>{comment}</p>
                    </div>
                </div>
            ))} */}
        </>
    )
};

export default Comments;

