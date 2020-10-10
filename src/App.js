import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import Head from "./components/head.jsx"

function App() {
  return (
    <div className="App">
      <Head numberOfMails="5"></Head>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
