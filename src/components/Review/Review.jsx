import { useSelector } from 'react';

function Review () {

    const feedback = useSelector((store) => store.feedback);

    return (
        <div>
            <h1>Review Your Feedback</h1>
            <h3>Feelings: {feedback.feelings}</h3>
            <h3>Understanding: {feedback.understanding}</h3>
            <h3>Support: {feedback.supported}</h3>
            <h3>Comments: {feedback.comments}</h3>
        </div>
    )
}

export default Review;