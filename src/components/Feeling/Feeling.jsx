import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling () {

    const [feelingInput, setFeelingInput] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();
    
    const sendFeeling = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_FEELING',
            payload: feelingInput
        });

        history.push('/understanding');
    }

    return (
        <form onSubmit={sendFeeling}>
            <h1>How are you feeling today?</h1>
            <input 
                required
                type="number" min="1" max="5"
                placeholder="feeling?"
                value={feelingInput}
                onChange={ event => setFeelingInput(event.target.value) }
            />
            <button className='next'>NEXT</button>
        </form>
    )
}

export default Feeling;