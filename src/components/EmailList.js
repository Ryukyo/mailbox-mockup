import React from 'react'
import EmailListItem from './EmailListItem'

export default function EmailList (props) {
    const emailList = props.emails.map((mail) => {
        return (
            <EmailListItem 
                key={mail.id}
                from={mail.from}
                to={mail.to}
                subject={mail.subject}
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
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {emailList}
        </tbody>
      </table>
    )
}