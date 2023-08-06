import { Outlet } from 'react-router-dom';
import sprite from '../../../images/sprite.svg';

import {
  Header,
  Title,
  Select,
  Wrap,
  Input,
  InputWrap,
  Container,
} from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Wrap>
          <Title>Event Planner</Title>
          <Select>
            <option value="value1">UK</option>
          </Select>
        </Wrap>
        <InputWrap>
          <svg>
            <use href={sprite + '#search'} />
          </svg>
          <Input placeholder="Search by keywords" />
        </InputWrap>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
