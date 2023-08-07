import { NavLink } from 'react-router-dom';

import { styled } from 'styled-components';
import DEVICE from '../../constants/deviceSize';
const { tablet, laptop } = DEVICE;

export const Container = styled.div`
  width: 272px;
  height: 470px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media ${tablet} {
    width: 332px;
  }
  @media ${laptop} {
    width: 302px;
  }
  &:hover {
    & .infoWrap {
      transform: translateY(-104px);

      @media ${tablet} {
        transform: translateY(-96px);
      }
    }
  }
  img {
    width: 272px;
    height: 336px;
    object-fit: cover;

    @media ${tablet} {
      width: 332px;
      height: 336px;
    }

    @media ${laptop} {
      width: 302px;
    }
  }
  &:hover Description {
    background-color: red;
  }
`;

export const NotesWrap = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
`;
export const Note = styled.div`
  padding: 8px 12px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: 500;
  line-height: 20px;
  font-size: 14px;
  &:not(:last-child) {
    margin-right: 12px;
  }
`;
export const Type = styled.p`
  color: ${p => p.theme.color.accent};
`;
export const Importance = styled.p`
  color: ${p => p.theme.color.high};
`;
export const InfoWrap = styled.div`
  transform: translateY(-40px);
  transition: transform 250ms ease-in-out;
`;

export const Info = styled.div`
  height: 40px;

  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.8);

  p {
    font-size: 14px;
    line-height: 24px;
    color: ${p => p.theme.color.accent};
  }
`;
export const Description = styled.div`
  background-color: #fff;
  padding: 16px;
  margin-top: -7px;
`;
export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #1c1b1f;
  margin-bottom: 16px;
`;
export const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #49454f;
  height: 72px;
`;

export const Btn = styled(NavLink)`
  display: block;
  box-sizing: border-box;
  padding: 10px 24px;
  border-radius: 8px;
  border-color: transparent;
  background-color: ${p => p.theme.color.accent};
  font-weight: 500;
  line-height: 20px;
  font-family: inherit;
  margin-left: auto;
  margin-top: 16px;
  font-size: 14px;
  color: #fff;
  width: 114px;
  height: 40px;
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.1);
  }
`;
