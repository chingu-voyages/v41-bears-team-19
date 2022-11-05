import './PetCard.css';
import pin from '../../images/location.png';

import React from 'react';

interface Pet {
  name: string;
  age: number;
  type: string;
  photo: string;
  location: string;
}

const PetCard = ({ name, age, type, photo, location }: Pet) => {
  return (
    <article className="card">
      <img src={photo} alt="" className="card__image" />
      <h2 className="card__title">{name}</h2>
      <div className="card__buttons">
        <button className="card__button card__button_pet">{type}</button>
        <button className="card__button card__button_age">{age}</button>
      </div>
      <div className="card__location">
        <img src={pin} alt="" className="card__pin" />
        <p className="card__text">{location}</p>
      </div>
    </article>
  );
};

export default PetCard;
