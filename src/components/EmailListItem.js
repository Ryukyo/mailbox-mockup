import React from 'react'

export default function EmailListItem (props) {
    return (
      <tr onClick={props.selectMail.bind(null)}>
        <td data-th="From">{props.from}</td>
        <td data-th="To">{props.to}</td>
        <td data-th="Subject">{props.subject}</td>
        <td >{props.attachment !== undefined? <img src={props.attachment} className="clip" alt="clip" width="15"/>: null }</td>
        <td data-th="Date">{props.date}</td>
      </tr>
    )
}