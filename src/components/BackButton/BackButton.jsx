import sprite from '../../sprite.svg';

import { Btn } from './BackButton.styled';

const BackButton = () => {
  return (
    <Btn to="/">
      <svg>
        <use href={sprite + '#arrow-left'} />
      </svg>
      Back
    </Btn>
  );
};
export default BackButton;
