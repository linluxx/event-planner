import { format } from 'date-fns';

import {
  Container,
  Note,
  Text,
  Title,
  Type,
  Importance,
  Info,
  Description,
  NotesWrap,
  Btn,
  InfoWrap,
} from './Card.styled';
// import art from '../../art.png';

const Card = ({ data }) => {
  const { category, date, description, id, time, location, priority, title } =
    data;
  const formattedDate = format(new Date(date), 'dd.MM.yy');
  return (
    <Container>
      <NotesWrap>
        <Note>
          <Type>{category}</Type>
        </Note>
        <Note>
          <Importance $priority={priority}>{priority}</Importance>
        </Note>
      </NotesWrap>

      <img src={`${process.env.PUBLIC_URL}/images/${category}.png`} alt="art" />
      <InfoWrap className="infoWrap">
        <Info>
          <p>
            {formattedDate} at {time}
          </p>
          <p>{location}</p>
        </Info>
        <Description>
          <Title>{title}</Title>
          <Text>{description}</Text>
          <Btn to={`event/${id}`}>More info</Btn>
        </Description>
      </InfoWrap>
    </Container>
  );
};

export default Card;
