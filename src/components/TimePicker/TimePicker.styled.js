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
      /* top: 16px;
      right: 10px;
      width: 20px;
      height: 20px; */
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

  .time-picker-wrap {
    width: 240px;
    height: 160px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  }
`;
