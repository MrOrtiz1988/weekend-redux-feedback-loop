import { useHistory } from 'react-router-dom';
//Material ui
import Button from '@mui/material/Button';

function Success () {

    const history = useHistory();

    const restart = () => {
        history.push('/');
    }

    return (
        <div>
            <h1>Feedback Recieved!</h1>
            <h1>Thank You!</h1>
            <Button onClick={restart} variant="contained">Leave New Feedback</Button>
        </div>
    )
}

export default Success;