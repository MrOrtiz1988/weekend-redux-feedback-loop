import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//Material ui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


function Comments() {

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

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <h1>Any Comments you want to leave?</h1>
            <TextField
                fullwidth="true"
                type="text"
                label="Comments?"
                multiline
                maxRows={5}
                value={commentInput}
                onChange={event => setCommentInput(event.target.value)}
            />
            <Button onClick={sendComment} sx={{ mt: 2, ml: 4 }} variant="contained">NEXT</Button>

        </Box>
    )
}

export default Comments;