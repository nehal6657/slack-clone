import './App.css';
import React , {useState} from "react";
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Chat from './Components/Chat';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';
function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user? (
          
          <Login/>
        ):(
          <>
          {/* Headder */}
        <Header/>
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* React-router for chat screen*/}
          <Switch>
            <Route path="/room/:roomId">
              {/* <h1> Chat Screen here </h1> */}
              <Chat/>
              {/* <Chat /> */}

            </Route>
            <Route path="/">
              <Chat/>

            </Route>
          </Switch>

        </div>
        </>

        )}
        
      </Router>


    </div>
  );
}

export default App;
