import { useHistory } from 'react-router-dom';

function Success () {

    const history = useHistory();

    const restart = () => {
        history.push('/');
    }

    return (
        <div>
            <h1>Feedback!</h1>
            <h1>Thank You!</h1>
            <button onClick={restart}>Leave New Feedback</button>
        </div>
    )
}

export default Success;