'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyDatePicker = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate:any) => {
        setDate(newDate);
    };

    return (
        <div className="w-full h-full">
            <Calendar
                value={date}
                onChange={onChange}
                calendarType="US" // Change 
                className={'custom-calendar h-full'}
            />
        </div>
    );
};

export default MyDatePicker;
