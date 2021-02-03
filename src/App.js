import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Homepage from './Components/Homepage/Homepage'
import BirthdayWishes from './Components/BirthdayWishes'
import Memories from './Components/Memories'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <br/>
      <Route path="/" exact component={Homepage} />
      <Route path="/birthdaywishes" component={BirthdayWishes} />
      <Route path="/memories" component={Memories} />
    </Router>
  );
}

export default App;
