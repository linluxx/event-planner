import { styled } from 'styled-components';
import DEVICE from '../../constants/deviceSize';
const { tablet, laptop } = DEVICE;

export const Form = styled.form`
  box-sizing: border-box;
  border-radius: 8px;
  background: ${p => p.theme.color.primary};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  padding: 40px 16px;
  width: 272px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  @media ${tablet} {
    width: 688px;
    height: 656px;
  }
  @media ${laptop} {
    width: 1280px;
    height: 490px;
  }
`;

export const InputsWrap = styled.div`
  width: 100%;
  height: 100%;
  @media ${tablet} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    align-items: center;
  }
  @media ${laptop} {
    height: 350px;
  }
`;

export const SelectWrap = styled.div`
  width: 240px;
  margin-top: 8px;
  margin-bottom: 20px;
  @media ${tablet} {
    width: 308px;
  }
  @media ${laptop} {
    width: 372px;
  }
`;
export const Label = styled.label`
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: ${p => p.theme.color.accent};
  position: relative;
  display: flex;
  flex-direction: column;

  svg {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 40px;
    right: 20px;
    stroke: ${p => p.theme.color.accent};
    cursor: pointer;
    transition: transform 250ms ease;
    &:hover {
      transform: scale(1.3);
    }
  }
`;
export const Input = styled.input`
  width: 240px;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid ${p => p.theme.color.divider};
  font-family: Poppins;
  margin-bottom: 20px;
  outline: none;
  margin-top: 8px;
  font-size: 16px;
  color: ${p => p.theme.color.text};
  @media ${tablet} {
    width: 308px;
  }
  @media ${laptop} {
    width: 372px;
  }
`;
export const Error = styled.div`
  font-size: 12px;
  color: ${p => p.theme.color.high};
  text-align: right;
  margin-top: -20px;
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 240px;
  color: ${p => p.theme.color.text};
  padding: 16px 12px;
  height: 156px;
  border-radius: 8px;
  border: 1px solid ${p => p.theme.color.divider};
  margin-bottom: 20px;
  font-family: Poppins;
  font-size: 16px;
  outline: none;
  resize: none;
  margin-top: 8px;
  @media ${tablet} {
    width: 308px;
  }
  @media ${laptop} {
    width: 372px;
  }
`;

export const Btn = styled.button`
  width: 100%;
  padding: 16px 12px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-color: ${p => p.theme.color.accent};
  color: ${p => p.theme.color.primary};
  font-weight: 500;
  font-size: 16px;
  font-family: inherit;
  display: block;
  border: none;
  cursor: pointer;
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.1);
  }
  @media ${tablet} {
    width: 193px;
    position: absolute;
    bottom: 40px;
    right: 24px;
  }
  @media ${laptop} {
    width: 193px;
    bottom: 54px;
    right: 40px;
  }
`;
