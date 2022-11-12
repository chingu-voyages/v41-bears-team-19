import PetCard from '../PetCard/PetCard';
import './AdoptPage.css';
import { Pet } from '../PetCard/PetCard';
import Categories from '../Categories/Categories';
import { useQuery } from '@apollo/client';
import { ALL_PETS } from '../../utils/requests';

const AdoptPage = () => {

  const { data }  = useQuery(ALL_PETS)

  const results = data && data.allPets.map((pet: Pet) => <PetCard pet={pet} key={pet.id}/>);

  return (
    <section className="adopt">
      <h1 className="adopt__title">Adopt Your Pet</h1>
      <Categories />
      <section className="results">{results}</section>
    </section>
  );
};

export default AdoptPage;
