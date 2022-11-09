import PetCard from '../PetCard/PetCard';
import './AdoptPage.css';
import { pets } from './testData';
import { Pet } from '../PetCard/PetCard';
import Categories from '../Categories/Categories';

const AdoptPage = () => {
  const results = pets.map((pet: Pet) => <PetCard pet={pet} key={pet.id as number}/>);

  return (
    <section className="adopt">
      <h1 className="adopt__title">Adopt Your Pet</h1>
      <Categories />
      <section className="results">{results}</section>
    </section>
  );
};

export default AdoptPage;
