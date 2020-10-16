import React from 'react'
import EmailListItem from './EmailListItem'
import clipIcon from "../assets/icon_clip.svg"

export default function EmailList (props) {
  /* 
  If the sample mails also had a time, here I would write a function with moment.js 
  that calculates in which format the date is passed to the EmailListItem component  
  */

    const emailList = props.emails.map((mail) => {
        return (
            <EmailListItem 
                key={mail.id}
                from={mail.from}
                to={mail.to}
                subject={mail.subject}
                attachment={mail.attachment? clipIcon : undefined}
                date={mail.date}
                selectMail={props.onSelectEmail.bind(null, mail.id)} 
            />
        )
    })

    return (
        <table className="email-list-table">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Subject</th>
            <th></th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {emailList}
        </tbody>
      </table>
    )
}