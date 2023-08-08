import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// import sprite from '../../sprite.svg';

import { createEvent, editEvent } from '../api/Api';

import {
  Form,
  Label,
  Input,
  Error,
  TextArea,
  Btn,
  InputsWrap,
  SelectWrap,
} from './ReusedForm.styled';
import DatePickerComponent from '../../components/Calendar/Calendar';
import Clock from '../TimePicker/TimePicker';
import SelectForm from '../SelectForm/SelectForm';

const ReusedForm = ({ type, event = null }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (event !== null) {
      setValue('title', event?.title);
      setValue('description', event?.description);
      setValue('location', event?.location);
      setValue('description', event?.description);
      setValue('description', event?.description);
    }
  }, [event, event?.description, event?.location, event?.title, setValue]);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const handleTimeChange = time => {
    setSelectedTime(time);
  };
  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };
  const handlePriorityChange = priority => {
    setSelectedPriority(priority);
  };
  const onSubmit = async data => {
    data.date = selectedDate;
    data.time = selectedTime;
    data.category = selectedCategory;
    data.priority = selectedPriority;
    if (type === 'create') {
      await createEvent(data);
      navigate('/', { replace: true });
    }
    if (type === 'edit') {
      await editEvent(data, event.id);
      navigate(`/event/${event.id}`, { replace: true });
    }

    reset({ ...data });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputsWrap>
        <Label>
          Title
          <Input
            type="text"
            {...register('title', {
              required: 'Required field',
              pattern: /^[\p{L}\s]+$/u,
              minLength: { value: 2, message: 'Enter minimum 2 symbols' },
            })}
            style={{
              border: errors.title ? '1px solid #FF2B77' : '1px solid #ACA7C3',
            }}
          />
          {/* <svg
            onClick={() => alert('delete')}
            style={{ stroke: errors.title ? ' #FF2B77' : '#7B61FF' }}
          >
            <use href={sprite + '#cross-small'} />
          </svg> */}
          {errors?.title && (
            <Error>
              <p>{errors?.title?.message || 'Invalid input'}</p>
            </Error>
          )}
        </Label>
        <Label>
          Description
          <TextArea
            type="text"
            {...register('description', {
              required: 'Required field',
              minLength: { value: 2, message: 'Enter minimum 2 symbols' },
            })}
            style={{
              border: errors.description
                ? '1px solid #FF2B77'
                : '1px solid #ACA7C3',
            }}
          />
          {/* <svg style={{ stroke: errors.description ? ' #FF2B77' : '#7B61FF' }}>
            <use href={sprite + '#cross-small'} />
          </svg> */}
          {errors?.description && (
            <Error>
              <p>{errors?.description?.message || 'Invalid input'}</p>
            </Error>
          )}
        </Label>
        <Label>
          Select date
          <DatePickerComponent
            // value={event?.date}
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
        </Label>
        <Label>
          Select time
          <Clock onTimeChange={handleTimeChange} selectedTime={selectedTime} />
        </Label>
        <Label>
          Location
          <Input
            type="text"
            {...register('location', {
              required: 'Required field',
              pattern: /^[\p{L}\s]+$/u,
              minLength: { value: 2, message: 'Enter minimum 2 symbols' },
            })}
            style={{
              border: errors.location
                ? '1px solid #FF2B77'
                : '1px solid #ACA7C3',
            }}
          />
          {/* <svg style={{ stroke: errors.location ? ' #FF2B77' : '#7B61FF' }}>
            <use href={sprite + '#cross-small'} />
          </svg> */}
          {errors?.location && (
            <Error>
              <p>{errors?.location?.message || 'Invalid input'}</p>
            </Error>
          )}
        </Label>
        <Label>
          Category
          <SelectWrap>
            <SelectForm
              selectedOp={
                event ? { value: event.category, label: event.category } : null
              }
              optionsName="category"
              onHandle={handleCategoryChange}
            />
          </SelectWrap>
        </Label>
        <Label>
          Add picture
          <Input disabled />
        </Label>
        <Label>
          Priority
          <SelectWrap>
            <SelectForm
              selectedOp={
                event ? { value: event.priority, label: event.priority } : null
              }
              optionsName="priority"
              onHandle={handlePriorityChange}
            />
          </SelectWrap>
        </Label>
      </InputsWrap>
      <Btn type="submit">{type === 'create' ? 'Add event' : 'Save'}</Btn>
    </Form>
  );
};

export default ReusedForm;
