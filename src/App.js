import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Homepage from './Components/Homepage/Homepage'
import BirthdayWishes from './Components/BirthdayWishes'
import Memories from './Components/Memories/Memories'
import './App.css'

function App() {

  const [messages, setMessages] = useState()

  const googleSheet = "https://docs.google.com/spreadsheets/d/1MnxtIevpjVwmqJMElCI43xy86-E6qsw3y4dvZ7o0HHI/edit#gid=294171905"
  const sheetId = "1MnxtIevpjVwmqJMElCI43xy86-E6qsw3y4dvZ7o0HHI"
  const tabIdNum = 1
  // const tabIdNum = "od6"
  const sheetAsJSON = "https://spreadsheets.google.com/feeds/list/1MnxtIevpjVwmqJMElCI43xy86-E6qsw3y4dvZ7o0HHI/1/public/values?alt=json"

  const getMessages = async () => {
    // const response = await fetch('Data.json')
    const response = await fetch(sheetAsJSON)
    console.log('response', response)
    const data = await response.json()
    setMessages(data)
    console.log('messages', messages)
  }
  useEffect(() => {
    getMessages()
  }, [])
  

  return (
    <Router>
      <Header />
      <br/>
      <Route path="/" exact component={Homepage} />
      <Route path="/birthdaywishes" component={BirthdayWishes} />
      <Route path="/memories">
        <div className="memories-div">
          <NavBar />
          <Memories messages={messages}/>
        </div>
      </Route>
    </Router>
  );
}

export default App;
