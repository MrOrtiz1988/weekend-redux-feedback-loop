import { useState } from 'react';
import { useDispatch } from 'react-redux';


function Feeling () {

    const [feelingInput, setFeelingInput] = useState('');

    const dispatch = useDispatch();
    
    const sendFeeling = () => {

    }

    return (
        <form>
            <h1>How well are you understanding the content?</h1>
            <input 
                type="text"
                placeholder="Understanding?"
                value={feelingInput}
                onChange={ event => setFeelingInput(event.target.value) }
            />
            <button>NEXT</button>
        </form>
    )
}

export default Feeling;