import './PetCard.css';
import pin from '../../images/location.png';

import React from 'react';

export type Pet = {
  id: number;
  name: string;
  age: number;
  type: string;
  photo: string;
  location: string;
};

const PetCard = ({ pet }: { pet: Pet }) => {
  const { name, age, type, photo, location } = pet;

  return (
    <article className="card">
      <img src={photo} alt="" className="card__image" />
      <h3 className="card__title">{name}</h3>

      <div className="card__location">
        <img src={pin} alt="" className="card__pin" />
        <p className="card__text">{location}</p>
      </div>

      <div className="card__buttons">
        <button className="card__button card__button_pet">{type}</button>
        <button className="card__button card__button_age">{age} year</button>
      </div>
    </article>
  );
};

export default PetCard;
