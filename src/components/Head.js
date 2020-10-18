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
      // let convertedStartDate = end.toISOString().split('T')[0]
      // console.log(convertedStartDate.replace(/-/g, "/"))
      setStartDate(start);
      setEndDate(end);
      
      // Trying to set the inputValue to a combination of the start and end date, hoping it would be displayed in the DatePicker
      // did not work, since the DatePicker ("selected") seems to expect a date object, not a string
      setInputValue(end)
    };

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
              dateFormat={"yyyy/M/d - yyyy/M/d"}
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