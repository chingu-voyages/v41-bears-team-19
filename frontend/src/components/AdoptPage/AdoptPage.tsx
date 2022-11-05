import PetCard from '../PetCard/PetCard';
import './AdoptPage.css';
import { pets } from './testData';
import { Pet } from '../PetCard/PetCard';

const AdoptPage = () => {
  const results = pets.map((pet: Pet) => <PetCard pet={pet} key={pet.id}/>);

  return (
    <section className="adopt">
      <h1 className="adopt___title">Adopt Your Pet</h1>
      {/* <Categories /> */}
      <section className="results">{results}</section>
    </section>
  );
};

export default AdoptPage;
