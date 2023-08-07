import axios from 'axios';
axios.defaults.baseURL = 'https://63866f7cbeaa6458267c8e58.mockapi.io/';

export const getEvents = async () => {
  try {
    const response = await axios.get('/events');
    return response.data;
  } catch (error) {
    return;
  }
};

export const getEventById = async id => {
  try {
    const response = await axios.get(`/events/${id}`);
    return response;
  } catch (error) {
    return;
  }
};

export const deleteEvent = async id => {
  try {
    await axios.delete(`/events/${id}`);
  } catch (error) {
    return;
  }
};

export const createEvent = async data => {
  try {
    const response = await axios.post('/events', { ...data });
    return response;
  } catch (error) {
    return;
  }
};
