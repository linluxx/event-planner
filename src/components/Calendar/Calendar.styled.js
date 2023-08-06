import styled from 'styled-components';
import DEVICE from '../../constants/deviceSize';
const { tablet, laptop } = DEVICE;

export const DatePickerContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  margin-bottom: 20px;
  width: 100%;
  margin-top: 8px;
`;

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    font-family: inherit;
    border: transparent;
    border-radius: 11px;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.07);
    width: 240px;
    background-color: #fff;
    height: 348px;
    padding: 20px;

    @media ${tablet} {
      width: 308px;
      height: 348px;
    }
    @media ${laptop} {
      width: 372px;
      height: 348px;
    }
  }

  .react-datepicker__input-container {
    width: 100%;

    input {
      box-sizing: border-box;
      width: 240px;
      height: 56px;
      border-radius: 8px;
      border: 1px solid ${p => p.theme.color.divider};
      outline: none;
      padding: 16px;
      @media ${tablet} {
        width: 308px;
      }
      @media ${laptop} {
        width: 372px;
      }
      &::placeholder {
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  .react-datepicker__header {
    color: ${p => p.theme.color.text};
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 10px; */
    font-size: 18px;
    font-weight: bold;
    border-bottom: none;
  }
  .react-datepicker__navigation {
    margin-top: 20px;
  }
  .react-datepicker__month-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .react-datepicker__current-month {
    color: ${p => p.theme.color.text};
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 16px;
  }

  .react-datepicker__month {
    width: 250px;
    @media ${tablet} {
      width: 372px;
    }
    @media ${laptop} {
      width: 372px;
    }
  }
  .react-datepicker__week {
    /* width: 250px;
    @media ${tablet} {
      width: 300px;
    }
    @media ${laptop} {
      width: 372px;
    } */
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-around;
    font-weight: 400;
    width: 100%;
    font-size: 12px;
    font-family: inherit;
    color: ${p => p.theme.color.text};
    line-height: 16px;
  }
  .react-datepicker__day-name {
    color: ${p => p.theme.color.text};
  }
  .react-datepicker__day {
    color: ${p => p.theme.color.divider};
    width: 24px;
    font-size: 12px;
    padding: 8px;
    cursor: pointer;
    &:hover {
      background-color: ${p => p.theme.color.accent};
      color: rgba(255, 255, 255, 1);
    }

    @media ${tablet} {
      width: 34px;
    }
    @media ${laptop} {
      width: 40px;
    }
  }

  .react-datepicker__day--selected {
    background-color: ${p => p.theme.color.accent};
    color: #fff;
  }
  .react-datepicker__day--today {
    color: ${p => p.theme.color.accent};
  }
`;
