import { useState } from 'react';
import { useDispatch } from 'react-redux';


function Supported () {

    const [supportedInput, setSupportedInput] = useState('');

    const dispatch = useDispatch();
    
    const sendSupported = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_SUPPORTED',
            payload: supportedInput
        })
    }

    return (
        <form onSubmit={sendSupported}>
            <h1>How well are you being supported?</h1>
            <input 
                type="text"
                placeholder="Supported?"
                value={supportedInput}
                onChange={ event => setSupportedInput(event.target.value) }
            />
            <button>NEXT</button>
        </form>
    )
}

export default Supported;
