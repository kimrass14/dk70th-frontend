import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './Components/NavBar'
import Homepage from './Components/Homepage/Homepage'
import BirthdayWishes from './Components/BirthdayWishes'
import Memories from './Components/Memories'

function App() {
  return (
    <Router>
      <NavBar />
      <br/>
      <Route path="/" exact component={Homepage} />
      <Route path="/birthdaywishes" component={BirthdayWishes} />
      <Route path="/memories" component={Memories} />
    </Router>
  );
}

export default App;
