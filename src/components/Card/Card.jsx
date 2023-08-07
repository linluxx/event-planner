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
  const { category, date, description, id, location, priority, time, title } =
    data;
  const formattedDate = new Date(date)
    .toLocaleString('en-GB')
    .replace(/\//g, '.');

  return (
    <Container>
      <NotesWrap>
        <Note>
          <Type>{category}</Type>
        </Note>
        <Note>
          <Importance>{priority}</Importance>
        </Note>
      </NotesWrap>

      <img src="http://localhost:3000/event-planner/images/art.png" alt="art" />
      <InfoWrap className="infoWrap">
        <Info>
          <p>{formattedDate} at 12:00</p>
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
