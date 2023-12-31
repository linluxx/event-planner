import { styled } from 'styled-components';
import DEVICE from '../../constants/deviceSize';
const { tablet, laptop } = DEVICE;

export const Container = styled.div`
  .ant-picker {
    width: 240px;
    padding: 16px 12px;
    border-radius: 8px;
    border: 1px solid ${p => p.theme.color.divider};
    font-family: Poppins;
    margin-bottom: 20px;
    outline: none;
    margin-top: 8px;
    height: 56px;

    &:hover,
    &:focus {
      box-shadow: none;
    }
    input {
      color: ${p => p.theme.color.text};
      font-family: inherit;
      font-size: 16px;
      line-height: 1.5;
    }
    svg {
      display: none;
    }

    @media ${tablet} {
      width: 308px;
    }
    @media ${laptop} {
      width: 372px;
    }
  }
  .ant-picker-input input::placeholder {
    font-size: 16px;
    font-family: Poppins;
  }
`;
