// import img from '../../images/art.png';

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

const Card = () => {
  return (
    <Container>
      <NotesWrap>
        <Note>
          <Type>Art</Type>
        </Note>
        <Note>
          <Importance>High</Importance>
        </Note>
      </NotesWrap>

      <img src="/images/art.png" alt="art" />
      <InfoWrap className="infoWrap">
        <Info>
          <p>12.07 at 12:00</p>
          <p>Kyiv</p>
        </Info>
        <Description>
          <Title>Galery Opening</Title>
          <Text>
            Discover an enchanting evening celebrating the world of art at our
            exclusive gallery opening.
          </Text>
          <Btn to="about">More info</Btn>
        </Description>
      </InfoWrap>
    </Container>
  );
};

export default Card;
