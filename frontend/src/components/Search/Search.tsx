import './Search.css';
import searchDecoration from '../../images/spiral-down-pink.png';
import searchPet from '../../images/search-pet.png';
import React from 'react';
import FormPage from '../FormPage/FormPage';

const Search = () => {
  const handleSubmit = () => {
    console.log('Start here');
  };
  return (
    <FormPage
      title="Start Here"
      decoration={searchDecoration}
      submitHandler={handleSubmit}
    >
      <>
        <label className="form__label" htmlFor="search">
          Look for pets in your area
        </label>
        <input
          className="form__input"
          name="search"
          placeholder="Type your city"
          required
        />
        <input
          type="submit"
          className="form__submit form__submit_search"
        />
        <div className="search__buttons">
          <button className="search__button">Login</button>
          <button className="search__button">Register</button>
        </div>
        <img src={searchPet} alt="" className="search__image" />
      </>
    </FormPage>
  );
};

export default Search;
