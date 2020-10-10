import React from 'react'
import '../style/head.css';

export default function Head ({numberOfMails}) {
    
    return (
        <div className="head">
           <div className="searchByDate">
            Add Datepicker
           </div>

           <div className="resultNumber">
            Results: {numberOfMails} mail(s)
           </div>
           <hr className="headerLine"/>
        </div>
    )
}