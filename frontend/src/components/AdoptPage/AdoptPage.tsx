import PetCard from '../PetCard/PetCard';
import './AdoptPage.css';
import { Pet } from '../PetCard/PetCard';
import Categories from '../Categories/Categories';
import { gql, useQuery } from '@apollo/client';
import { petQueryWithFilters } from '../../utils/requests';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const AdoptPage = () => {
  const { state } = useLocation();
  const [searchParameters, setSearchParameters] = useState(
    state ?? petQueryWithFilters({location: '', type: ''})
  );
  const [petLocation, setpetLocation] = useState('');
  const [petType, setPetType] = useState('')
  const { data } = useQuery(
    gql`
      ${searchParameters}
    `
  );

  const handleLocationSubmit = (event: any) => {
    event.preventDefault();
    setSearchParameters(() => petQueryWithFilters({location: petLocation, type: petType}));
  };

  const handlePetSelection = (selection: string) => {
    setPetType(selection)
  }

  return (
    <section className="adopt">
      <h1 className="adopt__title">Adopt Your Pet</h1>
      <form className="adopt__search" onSubmit={handleLocationSubmit}>
        <label className="form__label" htmlFor="search">
          Look for pets in your area
        </label>
        <input
          type="text"
          className="form__input adopt__input"
          placeholder="Search your area"
          onChange={(event) => setpetLocation(event.target.value as string)}
        />
      </form>
      <Categories onSelection={handlePetSelection}/>
      <section className="results">
        {data &&
          data.allPets.map((pet: Pet) => <PetCard pet={pet} key={pet.id} />)}
      </section>
    </section>
  );
};

export default AdoptPage;
