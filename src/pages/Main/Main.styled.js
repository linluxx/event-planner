import { NavLink } from 'react-router-dom';

import { styled } from 'styled-components';
import DEVICE from '../../constants/deviceSize';
const { tablet, laptop } = DEVICE;

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-bottom: 40px;
  gap: 24px;
  margin-bottom: 24px;
`;

export const AddBtn = styled(NavLink)`
  padding: 16px;
  border: transparent;
  border-radius: 8px;
  background: ${p => p.theme.color.accent};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  cursor: pointer;
  color: #fff;
  display: flex;
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.1);
  }
  svg {
    width: 24px;
    height: 24px;
    stroke: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${tablet} {
      margin-right: 16px;
    }
  }
  p {
    display: none;
    @media ${tablet} {
      display: block;
    }
  }
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  margin-bottom: 24px;
  place-items: center;
  @media ${tablet} {
    grid-template-columns: repeat(2, 1fr);
    max-width: 768px;
  }
  @media ${laptop} {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1280px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1440px;
  }
  margin: 0 auto;
`;
