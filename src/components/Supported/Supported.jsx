import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Supported () {

    const [supportedInput, setSupportedInput] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();
    
    const sendSupported = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_SUPPORTED',
            payload: supportedInput
        });

        history.push('/comments');
    }

    return (
        <form onSubmit={sendSupported}>
            <h1>How well are you being supported?</h1>
            <input 
                required
                type="number" min="1" max="5"
                placeholder="Support?"
                value={supportedInput}
                onChange={ event => setSupportedInput(event.target.value) }
            />
            <button className='next'>NEXT</button>
        </form>
    )
}

export default Supported;
