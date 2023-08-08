import React from 'react';
import { TimePicker } from 'antd';

import './TimePicker.css';
import { Container } from './TimePicker.styled';

const Clock = ({ onTimeChange }) => {
  const onSelectTime = (time, timeString) => {
    onTimeChange(timeString);
    console.log(timeString);
  };

  return (
    <Container>
      <TimePicker
        use12Hours
        format="h:mm a"
        onChange={onSelectTime}
        changeOnBlur={true}
        bottomLeft={true}
        popupClassName="time-picker-wrap"
      />
    </Container>
  );
};

export default Clock;
