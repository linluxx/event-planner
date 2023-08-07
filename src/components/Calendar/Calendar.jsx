import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DatePickerContainer, DatePickerWrapper } from './Calendar.styled';

const DatePickerComponent = ({ setDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
    setDate(selectedDate);
  };

  return (
    <DatePickerContainer>
      <DatePickerWrapper>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          isClearable
          placeholderText="Select date"
        />
      </DatePickerWrapper>
    </DatePickerContainer>
  );
};

export default DatePickerComponent;
