import { styled } from 'styled-components';
import DEVICE from '../../constants/deviceSize';
import { NavLink } from 'react-router-dom';
const { mobile, tablet, laptop } = DEVICE;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  color: ${p => p.theme.color.text};
  margin-bottom: 24px;

  @media ${tablet} {
    font-size: 32px;
  }
`;

export const Card = styled.div`
  width: 272px;
  height: 464px;
  border-radius: 8px;
  background: ${p => p.theme.color.primary};
  margin: 0 auto;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  @media ${tablet} {
    width: 688px;
    height: 504px;
  }
  @media ${laptop} {
    width: 628px;
    height: 492px;
  }
  img {
    width: 272px;
    display: block;
    height: 168px;
    object-fit: cover;
    border-radius: 8px;
    @media ${tablet} {
      width: 688px;
      height: 272px;
    }
    @media ${laptop} {
      width: 628px;
    }
  }
`;

export const Info = styled.div`
  padding: 24px 16px;
  height: 296px;
  @media ${tablet} {
    padding: 24px;
    height: 232px;
  }
  @media ${laptop} {
    height: 220px;
    padding: 20px 16px;
  }
`;
export const Description = styled.p`
  font-size: 14px;
  color: ${p => p.theme.color.text};
  line-height: 20px;
  margin-bottom: 24px;
  height: 60px;
`;

export const NotesWrap = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
export const Note = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  background: ${p => p.theme.color.primary};
  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
  height: 32px;
  color: ${p => {
    switch (p.$priority) {
      case 'Low':
        return p.theme.color.low;
      case 'High':
        return p.theme.color.high;
      case 'Medium':
        return p.theme.color.medium;
      default:
        return p.theme.color.accent;
    }
  }};
  font-size: 14px;
  line-height: 24px;
  text-align: center;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${tablet} {
    margin-left: auto;
    gap: 16px;
    justify-content: flex-end;
    width: 235px;
  }
`;

export const Btn = styled.button`
  text-align: center;
  height: 32px;
  cursor: pointer;
  padding: 8px 16px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${p => p.theme.color.primary};

  background-color: ${p => p.theme.color.accent};
  border: 1px solid ${p => p.theme.color.accent};
  border-radius: 4px;
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.1);
  }

  @media ${mobile} {
    width: 110px;
  }
`;

export const EditLink = styled(NavLink)`
  text-align: center;
  height: 32px;
  padding: 8px 16px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${p => p.theme.color.accent};

  background-color: ${p => p.theme.color.primary};
  border: 1px solid ${p => p.theme.color.accent};
  border-radius: 4px;
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.1);
  }

  @media ${mobile} {
    width: 110px;
  }
`;
