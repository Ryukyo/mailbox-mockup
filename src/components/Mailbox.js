import React, {useEffect, useState} from 'react'
import EmailList from './EmailList'
import Email from './Email'
import EmptySelection from './EmptySelection'

export default function Mailbox (props) {
    const [emailId, setEmailId] = useState(null)
    let selectedEmail = <EmptySelection/>

    useEffect(() => {
        if(emailId) {
            let mailToDisplay = props.emails.filter((mail) => {
                return mail.id === emailId
            })[0];
            selectedEmail = <Email 
                id={mailToDisplay.id}
                from={mailToDisplay.from}
                to={mailToDisplay.to}
                subject={mailToDisplay.subject}
                date={mailToDisplay.date}
                body={mailToDisplay.body}
            />
        }
    }, [])

      const handleSelectEmail = (id) => {
        setEmailId(id);
      };

    return (
        <div>
        <EmailList emails={props.emails}
                   onSelectEmail={handleSelectEmail} />
        <div className="email-viewer">
          {selectedEmail}
        </div>
      </div>
    )
}