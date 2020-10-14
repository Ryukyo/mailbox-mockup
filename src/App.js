import React, {useState} from 'react';
import './App.css';
import Head from "./components/Head"
import Mailbox from "./components/Mailbox"
import Logo from "./components/Logo"
import moment from 'moment'

const emailsFromJSON = require('./assets/emails.json')

function App() {
  const [numberOfMails, setNumberOfMails] = useState(0)
  const [emailsToDisplay, setEmailsToDisplay] = useState([])

  const startSearchByDate = (startDate, endDate) => {
    // Filter emails from JSON sample file (usually get the from endpoint) by start and end date (including)
    let mailsWithinDateRange = emailsFromJSON.filter((mail) => {
      console.log(mail.date)
      return moment(mail.date).isBetween(startDate, endDate, "day", true)
    })
     
    // Set number of mails to length of filtered array and pass the filtered array to mailbox component
    setEmailsToDisplay(mailsWithinDateRange)
    setNumberOfMails(mailsWithinDateRange.length)
  }

  return (
    <div className="App">
      <Head numberOfMails={numberOfMails} search={startSearchByDate}></Head>
      {numberOfMails <= 0? <Logo/> : <Mailbox emails={emailsToDisplay}/>}
    </div>
  );
}

export default App;
