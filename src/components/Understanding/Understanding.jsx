import { useState } from 'react';
import { useDispatch } from 'react-redux';


function Understanding () {

    const [understandingInput, setUnderstandingInput] = useState('');

    const dispatch = useDispatch();
    
    const sendUnderstanding = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understandingInput
        })
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