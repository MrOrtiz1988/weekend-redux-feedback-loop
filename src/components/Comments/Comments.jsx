import { useState } from 'react';
import { useDispatch } from 'react-redux';


function Comments () {

    const [commentInput, setCommentInput] = useState('');

    const dispatch = useDispatch();
    
    const sendComment = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_COMMENT',
            payload: commentInput
        })
    }

    return (
        <form onSubmit={sendComment}>
            <h1>Any Comments you want to leave?</h1>
            <input 
                type="text"
                placeholder="Comments?"
                value={commentInput}
                onChange={ event => setCommentInput(event.target.value) }
            />
            <button>NEXT</button>
        </form>
    )
}

export default Comments;