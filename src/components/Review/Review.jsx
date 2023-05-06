import { useSelector } from 'react-redux';
import axios from 'axios';

function Review () {

    const feedback = useSelector((store) => store.feedback);

    const sendFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        }).then( response => {
            console.log(response);
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
            <button onClick={sendFeedback}>SUBMIT</button>
        </div>
    )
}

export default Review;