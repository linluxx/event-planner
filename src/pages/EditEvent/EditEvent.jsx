import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BackButton from '../../components/BackButton/BackButton';
import ReusedForm from '../../components/ReusedForm/ReusedForm';
import { getEventById } from '../../components/api/Api';

import { Title } from './EditEvent.styled';

const EditEvent = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    (async function () {
      const { data } = await getEventById(eventId);
      setEvent(data);
    })();
    return () => {};
  }, [eventId]);
  return (
    <div>
      <BackButton />
      <Title>Edit event</Title>
      <ReusedForm type="edit" event={event} />
    </div>
  );
};

export default EditEvent;
