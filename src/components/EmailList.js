import React from 'react'
import EmailListItem from './EmailListItem'
import clipIcon from "../assets/icon_clip.svg"
import useSortableData from "../helper/customHook";

export default function EmailList (props) {
  const { emailList, requestSort, sortConfig } = useSortableData(props.emails);
  
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  /* 
  If the sample mails also had a time, here I would write a function with moment.js 
  that calculates in which format the date is passed to the EmailListItem component  
  */

  return (
      <table className="email-list-table">
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('from')}
              className={getClassNamesFor('from')}
              >
              From
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('to')}
              className={getClassNamesFor('to')}
              >
              To
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('subject')}
              className={getClassNamesFor('subject')}
              >
              Subject
            </button>
          </th>
          <th></th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('date')}
              className={getClassNamesFor('date')}
              >
              Date
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {emailList.map((mail) => (
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
        )}
      </tbody>
    </table>
  )
}