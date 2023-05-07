import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'

function Admin() {

    const dispatch = useDispatch();

    const feedbackHistory = useSelector((store) => store.feedbackHistory);

    useEffect(() => {
        getFeedbackHistory();
    }, [])

    const getFeedbackHistory = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {
            dispatch({
                type: 'ALL_FEEDBACK_HISTORY',
                payload: response.data
            })
        }).catch(error => {
            console.log('Problem with GET to /feedback');
        })
    }

    return (
        <div className='table-div'>
        <h1>Feedback Results!</h1>
            <table>
                <thead>
                    <tr>
                        <td>Feeling</td>
                        <td>Comprehension</td>
                        <td>Support</td>
                        <td>Comments</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        feedbackHistory.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.feeling}</td>
                                    <td>{item.understanding}</td>
                                    <td>{item.support}</td>
                                    <td>"{item.comments}"</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Admin;