import React from 'react'
import '../style/email.css';

export default function Email (props) {

    return (
      <div className="email">
        <dl className="dl-horizontal">
          <dt>From</dt>
          <dd>{props.from}</dd>

          <dt>To</dt>
          <dd>{props.to}</dd>

          <dt>Subject</dt>
          <dd>{props.subject}</dd>

          <dt>Date</dt>
          <dd>{props.date}</dd>
        </dl>
        <div className="email-body" dangerouslySetInnerHTML={{__html: props.body}}></div>
      </div>
    )
}