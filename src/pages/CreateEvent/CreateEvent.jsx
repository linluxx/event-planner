import { useForm } from 'react-hook-form';

import sprite from '../../images/sprite.svg';
import {
  Form,
  Label,
  Input,
  Error,
  Title,
  Select,
  TextArea,
  Btn,
  InputsWrap,
} from './CreateEvent.styled';
import DatePickerComponent from '../../components/Calendar/Calendar';
import BackButton from '../../components/BackButton/BackButton';

const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });
  return (
    <div>
      <BackButton />
      <Title>Create new event</Title>
      <Form>
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
                border: errors.title
                  ? '1px solid #FF2B77'
                  : '1px solid #ACA7C3',
              }}
            />
            <svg
              onClick={() => alert('delete')}
              style={{ stroke: errors.title ? ' #FF2B77' : '#7B61FF' }}
            >
              <use href={sprite + '#cross-small'} />
            </svg>
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
            <svg
              style={{ stroke: errors.description ? ' #FF2B77' : '#7B61FF' }}
            >
              <use href={sprite + '#cross-small'} />
            </svg>
            {errors?.description && (
              <Error>
                <p>{errors?.description?.message || 'Invalid input'}</p>
              </Error>
            )}
          </Label>
          <Label>
            Select date
            <DatePickerComponent />
          </Label>
          <Label>
            Select time
            <Input
              type="text"
              {...register('time', {
                required: 'Required field',
                pattern: /^[\p{L}\s]+$/u,
                minLength: { value: 2, message: 'Enter minimum 2 symbols' },
              })}
              style={{
                border: errors.time ? '1px solid #FF2B77' : '1px solid #ACA7C3',
              }}
            />
            {errors?.time && (
              <Error>
                <p>{errors?.time?.message || 'Invalid input'}</p>
              </Error>
            )}
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
            <svg style={{ stroke: errors.location ? ' #FF2B77' : '#7B61FF' }}>
              <use href={sprite + '#cross-small'} />
            </svg>
            {errors?.location && (
              <Error>
                <p>{errors?.location?.message || 'Invalid input'}</p>
              </Error>
            )}
          </Label>
          <Label>
            Category
            <Select
              name="category"
              {...register('category', {
                required: 'Required field',
              })}
              style={{
                border: errors.category
                  ? '1px solid #FF2B77'
                  : '1px solid #ACA7C3',
              }}
            >
              <option value="Art">Art</option>
              <option value="Music">Music</option>
              <option value="Business">Business</option>
              <option value="Conference">Conference</option>
              <option value="Workshop">Workshop</option>
              <option value="Party">Party</option>
              <option value="Sport">Sport</option>
            </Select>
            {errors?.category && (
              <Error>
                <p>{errors?.category?.message || 'Invalid input'}</p>
              </Error>
            )}
          </Label>
          <Label>
            Add picture
            <Input
              disabled
              type="text"
              {...register('picture', {
                required: 'Required field',
              })}
              style={{
                border: errors.picture
                  ? '1px solid #FF2B77'
                  : '1px solid #ACA7C3',
              }}
            />
            {errors?.picture && (
              <Error>
                <p>{errors?.picture?.message || 'Invalid input'}</p>
              </Error>
            )}
          </Label>
          <Label>
            Priority
            <Select
              name="priority"
              {...register('priority', {
                required: 'Required field',
              })}
              style={{
                border: errors.priority
                  ? '1px solid #FF2B77'
                  : '1px solid #ACA7C3',
              }}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Select>
            {errors?.priority && (
              <Error>
                <p>{errors?.priority?.message || 'Invalid input'}</p>
              </Error>
            )}
          </Label>
        </InputsWrap>
        <Btn type="submit" disabled={!isValid}>
          Add event
        </Btn>
      </Form>
    </div>
  );
};

export default CreateEvent;
