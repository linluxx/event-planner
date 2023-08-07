import React from 'react';
import { TimePicker } from 'antd';
import { Container } from './TimePicker.styled';

const Clock = ({ onTimeChange, selectedTime }) => {
  const onSelectTime = (time, timeString) => {
    console.log(timeString);
    onTimeChange(timeString);
  };

  return (
    <Container>
      <TimePicker
        use12Hours
        format="h:mm a"
        onChange={onSelectTime}
        bottomLeft={true}
        popupClassName="time-picker-wrap"
      />
    </Container>
  );
};

export default Clock;
