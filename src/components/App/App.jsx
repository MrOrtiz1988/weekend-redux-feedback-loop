import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

function App() {

  return (
    <div>

      <div className='App'>
        <Header />
      </div>

      <Router>
      {/* i wrapped all of it in a div to apply css rules to each vew page 
      so i wouldnt write it multiple times */}
        <div className='all-routes'>
        <Link to="/admin">Admin</Link>
          <Route exact path="/">
            <Feeling />
          </Route>

          <Route exact path="/understanding">
            <Understanding />
          </Route>

          <Route exact path="/supported">
            <Supported />
          </Route>

          <Route exact path="/comments">
            <Comments />
          </Route>

          <Route exact path="/review">
            <Review />
          </Route>

          <Route exact path="/success">
            <Success />
          </Route>

          <Route exact path="/admin">
            <Admin />
          </Route>
        </div>
      </Router>

    </div>
  );
}

export default App;
