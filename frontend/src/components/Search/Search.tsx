import './Search.css';
import searchDecoration from '../../images/spiral-down-pink.png';
import searchPet from '../../images/search-pet.png';
import { useEffect } from 'react';
import FormPage from '../FormPage/FormPage';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface SearchQuery {
  query: string;
}

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
    formState,
    reset,
  } = useForm({
    defaultValues: {
      query: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ query: '' });
    }
  }, [formState, reset]);

  const submitSearchData = (data: SearchQuery) => {
    console.log(data);
  };
  return (
    <FormPage
      title="Start Here"
      decoration={searchDecoration}
      submitHandler={handleSubmit(submitSearchData)}
    >
      <>
        <label className="form__label" htmlFor="search">
          Look for pets in your area
        </label>
        <input
          {...register('query', { required: true })}
          className="form__input"
          placeholder="Type your city"
        />
        <input
          type="submit"
          className={`form__submit form__submit_search ${
            !isValid ? 'form__submit_disabled' : ''
          }`}
          disabled={!isDirty && !isValid}
        />
        <div className="search__buttons">
          <Link to="/login" className="search__link">
            <button className="search__button">Login</button>
          </Link>
          <Link to="/register" className="search__link">
            <button className="search__button">Register</button>
          </Link>
        </div>
        <img src={searchPet} alt="" className="search__image" />
      </>
    </FormPage>
  );
};

export default Search;
