import './ShelterCard.css';
import pin from '../../images/location.png';

import React from 'react';

export type Shelter = {
  id: number,
  name: string,
  photo: string,
  location: string,
}


const ShelterCard = ({ name, photo, location }: any) => {

  return (
    <article className="shelter-card">
      <img src={photo} alt={name} className="card__shelter-image" />
      <h3 className="card__title">{name}</h3>

      <div className="card__location">
        <img src={pin} alt="" className="card__pin" />
        <p className="card__text">{location}</p>
      </div>

    </article>
  );
};

export default ShelterCard;
