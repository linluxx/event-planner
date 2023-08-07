import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { deleteEvent } from '../api/Api';

import {
  Title,
  Card,
  Info,
  Description,
  NotesWrap,
  Note,
  Btn,
  BtnWrap,
} from './CardDetails.styled';

const CardDetails = ({ data }) => {
  const { category, date, description, location, priority, title } = data;
  const formattedDate = format(new Date(date), 'dd.MM.yy');
  const navigate = useNavigate();

  const onDeleteEvent = async () => {
    await deleteEvent(data.id);
    navigate('/', { replace: true });
  };
  return (
    <>
      <Title>{title}</Title>
      <Card>
        <img src="/images/art.png" alt="art" />
        <Info>
          <Description>{description}</Description>
          <NotesWrap>
            <Note>{category}</Note>
            <Note $priority={priority}>{priority}</Note>
            <Note>{location}</Note>
            <Note>{formattedDate} at 12:00 am</Note>
          </NotesWrap>
          <BtnWrap>
            <Btn type="button" $category="edit">
              Edit
            </Btn>
            <Btn type="button" $category="delete" onClick={onDeleteEvent}>
              Delete event
            </Btn>
          </BtnWrap>
        </Info>
      </Card>
    </>
  );
};

export default CardDetails;
