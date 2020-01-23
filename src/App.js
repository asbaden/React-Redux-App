import React from 'react';
import Joke from './components/Joke';
import {GlobalStyle} from "./styles/GlobalStyle"

import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle>
       <Joke />
      </GlobalStyle>
    
    </div>
  );
}

export default App;
