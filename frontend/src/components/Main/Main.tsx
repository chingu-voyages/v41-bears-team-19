import './Main.css';
import adoptImage from '../../images/adopt-pets.png';
import donateImage from '../../images/dogbrush.png';
import sponsorImage from '../../images/cat-mailbox.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main className="main">
      <section className="section section_adopt">
        <div className="section__items">
          <h2 className="section__title">Adopt pets in your area</h2>
          <p className="section__text">
            Find cats, dogs and other pets available right near you.
          </p>
          <Link to="find-pets">
            <button className="section__button section__button_red">
              Adopt
            </button>
          </Link>
        </div>
        <div className="section__image-container">
          <img
            src={adoptImage}
            alt="Illustration of two happy dogs"
            className="section__image"
          />
        </div>
      </section>

      <section className="section section_donate">
        <div className="section__image-container">
          <img
            src={donateImage}
            alt="Illustration of two happy dogs"
            className="section__image"
          />
        </div>
        <div className="section__items">
          <h2 className="section__title">Donate to your local shelters</h2>
          <p className="section__text">Find shelters in your area do donate.</p>
          <Link to="donate">
            <button className="section__button section__button_white">
              Find Shelters
            </button>
          </Link>
        </div>
      </section>

      <section className="section section_sponsor">
        <div className="section__items">
          <h2 className="section__title">Sponsors animals in need</h2>
          <p className="section__text">
            Some animals need resources for long-term medical treatments, or you
            can choose to make a recurring donation to a shelter.
          </p>
          <Link to="sponsor">
            <button className="section__button">Sponsor</button>
          </Link>
        </div>
        <div className="section__image-container">
          <img
            src={sponsorImage}
            alt="Illustration of two happy dogs"
            className="section__image"
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
