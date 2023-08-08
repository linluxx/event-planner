import { useEffect, useState } from 'react';

import Card from '../../components/Card/Card';
import { getEvents } from '../../components/api/Api';
import sprite from '../../sprite.svg';

import { AddBtn, BtnWrap, CardsContainer } from './Main.styled';

const Main = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async function getEventsList() {
      const data = await getEvents();
      setEvents(data);
    })();
  }, []);

  return (
    <div>
      <BtnWrap>
        {/* <Btn>
          <svg>
            <use href={sprite + '#filter'} />
          </svg>
          <p>Category</p>
        </Btn>
        <Btn>
          <svg>
            <use href={sprite + '#sort'} />
          </svg>
          <p>Sort by</p>
        </Btn> */}
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
