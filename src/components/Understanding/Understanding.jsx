import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding () {

    const [understandingInput, setUnderstandingInput] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();
    
    const sendUnderstanding = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understandingInput
        });

        history.push('/supported');
    }

    return (
        <form onSubmit={sendUnderstanding}>
            <h1>How well are you understanding the content?</h1>
            <input 
                type="text"
                placeholder="Understanding?"
                value={understandingInput}
                onChange={ event => setUnderstandingInput(event.target.value) }
            />
            <button>NEXT</button>
        </form>
    )
}

export default Understanding;