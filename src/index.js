import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// All the new Redux goodies:
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = (state = {}, action) => {
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
