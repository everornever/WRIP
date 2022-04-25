import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateField = ({date}) => {
    const [startDate, setStartDate] = useState(null);

    function handleSelect(){
        console.log("Start", startDate);
        date(startDate);
    }
    return (
        <div>
        <label htmlFor="datePicker">Datum</label>
        <DatePicker
            // id={key}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            // onSelect={handleSelect}
            onInputClick={handleSelect}
            // onClick={handleClick}
            minDate={new Date()}
            maxDate={addDays(new Date(), 16)}
            placeholderText="Select a date between today and 7 days in the future"
        />
        </div>
    );
  };

export default DateField