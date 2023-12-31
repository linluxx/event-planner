import { Route, Routes } from 'react-router-dom';
import Layout from './UI/Layout/Layout';
import Main from '../pages/Main/Main';
import CreateEvent from '../pages/CreateEvent/CreateEvent';
import EventDetails from '../pages/EventDetails/EventDetails';
import EditEvent from '../pages/EditEvent/EditEvent';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="create" element={<CreateEvent />} />
          <Route path="event/:eventId" element={<EventDetails />} />
          <Route path="edit/:eventId" element={<EditEvent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
