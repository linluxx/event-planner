import { styled } from 'styled-components';
import DEVICE from '../../../constants/deviceSize';

const { tablet, laptop } = DEVICE;

export const Header = styled.header`
  border-bottom: 1px solid ${p => p.theme.color.accent};
  background: #fefcff;
  padding: 24px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
export const Title = styled.h1`
  font-family: 'Alata';
  color: ${p => p.theme.color.accent};
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
`;

export const Select = styled.select`
  width: 69px;
  padding: 12px 4px 12px 12px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  border: transparent;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  color: ${p => p.theme.color.text};
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    left: 12px;
    width: 24px;
    height: 24px;
    fill: ${p => p.theme.color.accent};
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 12px 12px 48px;
  border: transparent;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  &::placeholder {
    color: #888;
    font-size: 14px;
    font-family: 'Poppins';
  }
`;
export const Container = styled.div`
  padding: 40px 24px;
  @media ${tablet} {
    padding: 40px;
  }
  @media ${laptop} {
    padding: 40px 80px;
  }
`;
