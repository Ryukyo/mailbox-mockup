import React, {useEffect, useState} from 'react'
import EmailList from './EmailList'
import Email from './Email'
import EmptySelection from './EmptySelection'
import '../style/table.css';

export default function Mailbox (props) {
  const [emailId, setEmailId] = useState([null])
  const [selectedEmail, setSelectedEmail] = useState("")

  useEffect(() => {
    if(emailId[0] !== null) {
      let mailToDisplay = props.emails.filter((mail) => {
        return mail.id === emailId[0]
      });
      setSelectedEmail(
        <Email 
          id={mailToDisplay[0].id}
          from={mailToDisplay[0].from}
          to={mailToDisplay[0].to}
          subject={mailToDisplay[0].subject}
          date={mailToDisplay[0].date}
          body={mailToDisplay[0].body}
        />
      )
    }
  }, [emailId, props.emails])

  const handleSelectEmail = (id) => {
    if (emailId[0] === null) {
      setEmailId([id]);
    } else {
      setEmailId([null])
    }
  };

  return (
    <div>
      <EmailList 
        emails={props.emails}
        onSelectEmail={handleSelectEmail} 
      />
      <div className="email-viewer">
        {emailId[0] !== null? selectedEmail : <EmptySelection/>}
      </div>
    </div>
  )
}