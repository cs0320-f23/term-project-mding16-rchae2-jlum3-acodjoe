import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './components/login'
import LogoutButton from './components/logout'
import {gapi} from 'gapi-script'
import { useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom'

const clientID = "10157077496-ga07pafgh9f1sknlealncttjv4v0f9pa.apps.googleusercontent.com"

function App() {
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: {clientID},
        scope: "" // diff if you use other apis
      })
    }
    gapi.load('client:auth2', start)
  })

  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
    </div>
  );
}

export default App;
