import React from 'react'

export default function EmailListItem (props) {
    return (
        <tr onClick={props.selectMail.bind(null)}>
        <td>{props.from}</td>
        <td>{props.to}</td>
        <td>{props.subject}</td>
        <td>{props.date}</td>
      </tr>
    )
}