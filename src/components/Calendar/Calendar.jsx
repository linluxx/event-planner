import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DatePickerContainer, DatePickerWrapper } from './Calendar.styled';

const DatePickerComponent = ({ selectedDate, onDateChange }) => {
  // console.log(selectedDate);
  return (
    <DatePickerContainer>
      <DatePickerWrapper>
        <DatePicker
          selected={selectedDate}
          onChange={date => onDateChange(date)}
          dateFormat="dd/MM/yyyy"
          isClearable
          placeholderText="Select date"
        />
      </DatePickerWrapper>
    </DatePickerContainer>
  );
};

export default DatePickerComponent;
