import BackButton from '../../components/BackButton/BackButton';

import {
  Title,
  Card,
  Info,
  Description,
  NotesWrap,
  Note,
  Btn,
  BtnWrap,
} from './EventDetails.styled';
// import img from '../../images/art.png';

const EventDetails = () => {
  return (
    <div>
      <BackButton />
      <Title>Galery Opening</Title>
      <Card>
        <img src="/images/art.png" alt="art" />
        <Info>
          <Description>
            Discover an enchanting evening celebrating the world of art at our
            exclusive gallery opening.
          </Description>
          <NotesWrap>
            <Note>Art</Note>
            <Note>High</Note>
            <Note>Kyiv</Note>
            <Note>12.07 at 12:00 am</Note>
          </NotesWrap>
          <BtnWrap>
            <Btn type="button" $category="edit">
              Edit
            </Btn>
            <Btn type="button" $category="delete">
              Delete event
            </Btn>
          </BtnWrap>
        </Info>
      </Card>
    </div>
  );
};

export default EventDetails;
