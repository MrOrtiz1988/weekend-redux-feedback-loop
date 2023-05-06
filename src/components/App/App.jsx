import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

function App() {

  return (
    <div>
      <div className='App'>
        <Header />
      </div>
      <Feeling />
      <Understanding />
      <Supported />
      <Comments />
      {/* <Review /> */}
    </div>
  );
}

export default App;
