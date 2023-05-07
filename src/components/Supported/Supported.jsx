import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//Material ui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Supported() {

    const [supportedInput, setSupportedInput] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const sendSupported = (event) => {
        event.preventDefault()

        dispatch({
            type: 'SET_SUPPORTED',
            payload: supportedInput
        });

        history.push('/comments');
    }

    return (

        <Box
            onSubmit={sendSupported}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
        >
            <h1>How well are you being supported?</h1>
            <TextField
                required
                fullwidth="true"
                type="number"
                label="Understanding?"
                variant="standard"
                inputProps={{ min: 1, max: 5 }}
                value={supportedInput}
                onChange={event => setSupportedInput(event.target.value)}
            />
            <Button type="submit" sx={{ mt: 2, ml: 4 }} variant="contained">NEXT</Button>

        </Box>

    )
}

export default Supported;
