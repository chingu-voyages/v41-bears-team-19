import PetCard from '../PetCard/PetCard';
import './AdoptPage.css';
import { Pet } from '../PetCard/PetCard';
import Categories from '../Categories/Categories';
import { gql, useQuery } from '@apollo/client';
import { ALL_PETS, petQueryWithFilters } from '../../utils/requests';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const AdoptPage = () => {
    const { state } = useLocation();
  const [searchParameters, setSearchParameters ] = useState(state)
  const [searchInput, setSearchInput] = useState('')
  const { data } = useQuery(
    gql`
      ${searchParameters}
    `
  );

  const handleLocationSubmit = (event: any) => {
    event.preventDefault();
    setSearchParameters(() => petQueryWithFilters(searchInput))
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
          onChange={(event)=> setSearchInput(event.target.value as string)}
        />
      </form>
      <Categories />
      <section className="results">
        {data &&
          data.allPets.map((pet: Pet) => <PetCard pet={pet} key={pet.id} />)}
      </section>
    </section>
  );
};

export default AdoptPage;
