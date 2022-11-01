import './PetCard.css';
import location from '../../images/location.png';
import rabbit from '../../images/barnaby.png';

import React from 'react';

const PetCard = () => {
  return (
    <article className="card">
      <img src={rabbit} alt="" className="card__image" />
      <h2 className="card__title">Barnaby</h2>
      <div className="card__buttons">
        <button className="card__button card__button_pet">Bunny</button>
        <button className="card__button card__button_age">1 year</button>
      </div>
      <div className="card__location">
        <img src={location} alt="" className="card__pin" />
        <p className="card__text">Boulder, Colorado</p>
      </div>
    </article>
  );
};

export default PetCard;
