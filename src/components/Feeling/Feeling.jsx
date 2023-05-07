import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//Material ui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Feeling() {

    const [feelingInput, setFeelingInput] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const sendFeeling = () => {

        dispatch({
            type: 'SET_FEELING',
            payload: feelingInput
        });

        history.push('/understanding');
    }

    return (

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <h1>How are you feeling today?</h1>
            <TextField
                required
                fullWidth
                type="number"
                label="feeling?"
                variant="standard"
                inputProps={{ min: 1, max: 5 }}
                value={feelingInput}
                onChange={event => setFeelingInput(event.target.value)}
            />

            <Button onClick={sendFeeling} sx={{ mt: 2, ml: 4 }} variant="contained">NEXT</Button>
        </Box>

        // </form>
    )
}

export default Feeling;