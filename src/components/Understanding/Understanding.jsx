import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//Material ui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Understanding() {

    const [understandingInput, setUnderstandingInput] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const sendUnderstanding = (event) => {
        event.preventDefault()

        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understandingInput
        });

        history.push('/supported');
    }

    const backButton = () => {
        history.push('/');
    }

    return (

        <Box
            onSubmit={sendUnderstanding}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
        >
            <h1>How well are you understanding the content?</h1>
            <TextField
                required
                fullwidth="true"
                type="number"
                label="Understanding?"
                variant="standard"
                inputProps={{ min: 1, max: 5 }}
                value={understandingInput}
                onChange={event => setUnderstandingInput(event.target.value)}
            />
            <Button onClick={backButton} type="button" sx={{ mt: 2, ml: 4 }} variant="contained">BACK</Button>
            <Button type="submit" sx={{ mt: 2, ml: 4 }} variant="contained">NEXT</Button>

        </Box>
    )
}

export default Understanding;