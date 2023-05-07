import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
//Material ui
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function Review() {

    const feedback = useSelector((store) => store.feedback);

    const history = useHistory();

    const sendFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        }).then(response => {
            console.log(response);
            if (response.status === 201) {
                history.push('/success')
            }
        }).catch(error => {
            console.log('Problem with sendFeedback', error);
        })
    }

    return (
        <div>
            <h1>Review Your Feedback</h1>
            <h3>Feelings: {feedback.feeling}</h3>
            <h3>Understanding: {feedback.understanding}</h3>
            <h3>Support: {feedback.supported}</h3>
            <h3>Comments: {feedback.comments}</h3>
            <Button onClick={sendFeedback} sx={{ mb: 5 }} variant="contained" endIcon={<SendIcon />}>
                SUBMIT
            </Button>
        </div>
    )
}

export default Review;