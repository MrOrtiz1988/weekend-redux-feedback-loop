import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments () {

    const [commentInput, setCommentInput] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();
    
    const sendComment = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_COMMENT',
            payload: commentInput
        });

        history.push('/review');
    }

    return (
        <form onSubmit={sendComment}>
            <h1>Any Comments you want to leave?</h1>
            <textarea 
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