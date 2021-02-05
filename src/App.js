import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Homepage from './Components/Homepage/Homepage'
import BirthdayWishes from './Components/BirthdayWishes/BirthdayWishes'
import Memories from './Components/Memories/Memories'
import Appreciations from './Components/Appreciations/Appreciations'
import './App.scss'

function App() {

  const [messages, setMessages] = useState()

  const sheetAsJSON = "https://spreadsheets.google.com/feeds/list/1MnxtIevpjVwmqJMElCI43xy86-E6qsw3y4dvZ7o0HHI/1/public/values?alt=json"

  

  const getMessages = async () => {
    const response = await fetch(sheetAsJSON)
    console.log('response', response)
    const data = await response.json()
    setMessages(data)
  }
  useEffect(() => {
    getMessages()
  }, [])
  

  return (
    <Router>
      <Header />
      <br/>
      <Route path="/" exact component={Homepage} />
      <Route path="/birthdaywishes">
        <div className="page">
          <NavBar />
          <BirthdayWishes messages={messages}/>
        </div>
      </Route>
      <Route path="/memories">
        <div className="page">
          <NavBar />
          <Memories messages={messages}/>
        </div>
      </Route>
      <Route path="/appreciations">
        <div className="page">
          <NavBar />
          <Appreciations messages={messages}/>
        </div>
      </Route>
    </Router>
  );
}

export default App;
