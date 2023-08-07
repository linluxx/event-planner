import BackButton from '../../components/BackButton/BackButton';
import ReusedForm from '../../components/ReusedForm/ReusedForm';
import { Title } from './CreateEvent.styled';

const CreateEvent = () => {
  return (
    <div>
      <BackButton />
      <Title>Create new event</Title>
      <ReusedForm type="create" />
    </div>
  );
};

export default CreateEvent;
