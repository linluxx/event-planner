import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Btn = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: ${p => p.theme.color.accent};
  font-family: inherit;
  background-color: transparent;
  border: none;
  outline: none;
  margin-bottom: 24px;
  svg {
    margin-right: 8px;
    width: 24px;
    height: 24px;
    stroke: ${p => p.theme.color.accent};
  }
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.01);
  }
`;
