// import { useLocation } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import sprite from '../../sprite.svg';
import { AddBtn, BtnWrap, CardsContainer } from './Main.styled';
import { getEvents } from '../../components/api/Api';

const Main = () => {
  // const location = useLocation();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async function getEventsList() {
      const data = await getEvents();
      setEvents(data);
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <BtnWrap>
        {/* <AddBtn>
          <svg>
            <use href={sprite + '#plus'} />
          </svg>
          
        </AddBtn>
        <AddBtn>
          <svg>
            <use href={sprite + '#plus'} />
          </svg>
        </AddBtn> */}
        <AddBtn to="create">
          <svg>
            <use href={sprite + '#plus'} />
          </svg>
          <p>Add new event</p>
        </AddBtn>
      </BtnWrap>
      <CardsContainer>
        {events.map(event => {
          return <Card key={event.id} data={event} />;
        })}
      </CardsContainer>
    </div>
  );
};

export default Main;
