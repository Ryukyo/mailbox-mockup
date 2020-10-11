import React, { useState } from 'react'
import '../style/head.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import calendarIcon from "../assets/icon_calender.svg"
import searchIcon from "../assets/icon_search.svg"

export default function Head ({numberOfMails, search}) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [inputValue, setInputValue] = useState(startDate)
  
    const onChange = dates => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      console.log(startDate, end)
      setInputValue(startDate)
      console.log(inputValue)
    };

    /* const startSearchByDate = (startDate, endDate) => {
      console.log("searching")
    } */

    return (
        <div className="head">
           <div className="searchByDate">
             <img src={calendarIcon} className="calendar" alt="calendar" width="25"/>
               <DatePicker
                id="date"
                selected={inputValue}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                dateFormat={["yyyy/M/d", "yyyy/M/d"]}
              />
              <img src={searchIcon} className="search" alt="search" width="30" onClick={() => {search(startDate, endDate)}}/> 
           </div> 

           <div className="resultNumber">
            Results: {numberOfMails} mail(s)
           </div>
           <hr className="headerLine"/>
        </div>
    )
}