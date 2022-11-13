import './Main.css';
import adoptImage from '../../images/adopt-pets.png';
import donateImage from '../../images/dogbrush.png';
import sponsorImage from '../../images/cat-mailbox.png';
import { Link } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Team from '../Team/Team';


const Main = () => {
  return (
    <main className="main">
      <Hero />
      <section className="section section_adopt">
        <div className="section__items">
          <h2 className="section__title">Adopt pets in your area</h2>
          <p className="section__text">
            Find cats, dogs and other pets available right near you.
          </p>
          <Link to="find-pets">
            <button className="section__button">
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
            alt="Illustration of dog with toothbrush"
            className="section__image"
          />
        </div>
        <div className="section__items section__items_donate">
          <h2 className="section__title">Donate to your local shelters</h2>
          <p className="section__text">Find shelters in your area to donate.</p>
          <Link to="donate">
            <button className="section__button button__white">
              Find Shelters
            </button>
          </Link>
        </div>
      </section>

      <section className="section section_sponsor">
        <div className="section__items">
          <h2 className="section__title">Sponsor animals in need</h2>
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
            alt="Illustration of cat in a kennel"
            className="section__image"
          />
        </div>
      </section>
      <Team />

    </main>
  );
};

export default Main;
