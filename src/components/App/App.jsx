import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';

function App() {

  return (
    <div>
      <div className='App'>
        <Header />
      </div>
      <Feeling />
    </div>
  );
}

export default App;
