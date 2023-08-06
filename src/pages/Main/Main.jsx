import { useLocation } from 'react-router-dom';

import Card from '../../components/Card/Card';
import sprite from '../../images/sprite.svg';
import { AddBtn, BtnWrap, CardsContainer } from './Main.styled';

const Main = () => {
  const location = useLocation();
  console.log(location);
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>
    </div>
  );
};

export default Main;
