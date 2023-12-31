import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BackButton from '../../components/BackButton/BackButton';
import { getEventById } from '../../components/api/Api';
import CardDetails from '../../components/CardDetails/CardDetails';

const EventDetails = () => {
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
      {event && <CardDetails data={event} />}
    </div>
  );
};

export default EventDetails;
