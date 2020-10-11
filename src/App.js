import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import Head from "./components/Head"

function App() {

  const startSearchByDate = (startDate, endDate) => {
    console.log("searching")
  }

  return (
    <div className="App">
      <Head numberOfMails="5" search={startSearchByDate}></Head>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
