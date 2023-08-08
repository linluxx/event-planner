import art from '../images/art.png';
import business from '../images/business.png';
import conference from '../images/conference.png';
import music from '../images/music.png';
import party from '../images/party.png';
import sport from '../images/sport.png';
import workshop from '../images/workshop.png';

export const selectPicture = category => {
  if (category === 'Art') return art;
  if (category === 'Business') return business;
  if (category === 'Party') return party;
  if (category === 'Sport') return sport;
  if (category === 'Conference') return conference;
  if (category === 'Music') return music;
  if (category === 'Workshop') return workshop;
};
