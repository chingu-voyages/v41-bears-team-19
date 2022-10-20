import './Main.css';
import adoptImage from '../../images/adopt-pets.png';

import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main className="main">
      <section className="adopt">
        <div className="adopt__items">
          <h2 className="adopt__title">Adopt pets in your area</h2>
          <p className="adopt__text">
            Find cats, dogs and other pets available right near you.
          </p>
          <Link to="find-pets">
            <button className="adopt__button">Adopt</button>
          </Link>
        </div>
        <div className="adopt__image-container">
          <img
            src={adoptImage}
            alt="Illustration of two happy dogs"
            className="adopt__image"
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
