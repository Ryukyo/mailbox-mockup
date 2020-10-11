import React, {useState} from 'react';
import './App.css';
import Head from "./components/Head"
import Mailbox from "./components/Mailbox"
import Logo from "./components/Logo"

const emailsFromJSON = require('./assets/emails.json')

function App() {
  const [numberOfMails, setNumberOfMails] = useState(0)

  const startSearchByDate = (startDate, endDate) => {
    console.log(emailsFromJSON)
    setNumberOfMails(emailsFromJSON.length)

  }

  return (
    <div className="App">
      <Head numberOfMails={numberOfMails} search={startSearchByDate}></Head>
      {numberOfMails <= 0? <Logo/> : <Mailbox emails={emailsFromJSON}/>}
    </div>
  );
}

export default App;
