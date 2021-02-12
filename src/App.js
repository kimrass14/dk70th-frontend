import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Homepage from './Components/Homepage/Homepage'
import BirthdayWishes from './Components/BirthdayWishes/BirthdayWishes'
import Memories from './Components/Memories/Memories'
import Appreciations from './Components/Appreciations/Appreciations'
import ForYou from './Components/ForYou/ForYou'
import Donna from './Components/Donna/Donna'
import Kosudas from './Components/Kosudas/Kosudas'
import PhotoAlbum from './Components/PhotoAlbum/PhotoAlbum'
// import './App.scss'
import './_style.scss';

// import config from 'react-reveal/globals'
// config({ ssrFadeout: true });


function App() {

  const [messages, setMessages] = useState()

  const sheetAsJSON = "https://spreadsheets.google.com/feeds/list/1MnxtIevpjVwmqJMElCI43xy86-E6qsw3y4dvZ7o0HHI/1/public/values?alt=json"

  const getMessages = async () => {
    try {
      const response = await fetch(sheetAsJSON)
      console.log('response', response)
      const data = await response.json()
      setMessages(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMessages()
  }, [])
  

  return (
    <Router>
      <Header />
      {/* <br/> */}
      <Route path="/" exact component={Homepage} />
      <Route path="/foryou">
        <div className="page">
          <NavBar />
          <ForYou/>
        </div>
      </Route>
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
      <Route path="/donna">
        <div className="page">
          <NavBar />
          <Donna messages={messages}/>
        </div>
      </Route>
      <Route path="/kosudas">
        <div className="page">
          <NavBar />
          <Kosudas messages={messages}/>
        </div>
      </Route>
      <Route path="/photoalbum">
        <div className="page">
          <NavBar />
          <PhotoAlbum messages={messages}/>
        </div>
      </Route>
    </Router>
  );
}

export default App;
