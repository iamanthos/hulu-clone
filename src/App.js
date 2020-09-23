import React, { useState } from 'react';
import Header from './Header.js';
import Nav from './Nav.js';
import Result from './Result.js';
import './App.css';
import request from './request';

function App() {

  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);

  return (
    <div className="app">
      <Header/>
      <Nav setSelectedOption={setSelectedOption}/>
      <Result selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
