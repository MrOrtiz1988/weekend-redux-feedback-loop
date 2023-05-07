import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// All the new Redux goodies:
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//i managed to only need one reducer for each view
const feedback = (state = {}, action) => {
    if (action.type === 'SET_FEELING') {
        return {...state, feeling: action.payload}
    }else if (action.type === 'SET_UNDERSTANDING') {
        return {...state, understanding: action.payload}
    }else if (action.type === 'SET_SUPPORTED') {
        return {...state, supported: action.payload}
    }else if (action.type === 'SET_COMMENT') {
        return {...state, comments: action.payload}
    }
    return state;
}

const myStore = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(
        logger
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={myStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
