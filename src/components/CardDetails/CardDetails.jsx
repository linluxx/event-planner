import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { deleteEvent } from '../api/Api';
import { selectPicture } from '../../utils/getPicturePath';

import {
  Title,
  Card,
  Info,
  Description,
  NotesWrap,
  Note,
  Btn,
  BtnWrap,
  EditLink,
} from './CardDetails.styled';

const CardDetails = ({ data }) => {
  const { category, date, description, location, priority, time, title, id } =
    data;
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
        <img src={selectPicture(category)} alt={category} />
        <Info>
          <Description>{description}</Description>
          <NotesWrap>
            <Note>{category}</Note>
            <Note $priority={priority}>{priority}</Note>
            <Note>{location}</Note>
            <Note>
              {formattedDate} at {time}
            </Note>
          </NotesWrap>
          <BtnWrap>
            <EditLink to={`/edit/${id}`}>Edit</EditLink>
            <Btn type="button" onClick={onDeleteEvent}>
              Delete event
            </Btn>
          </BtnWrap>
        </Info>
      </Card>
    </>
  );
};

export default CardDetails;
