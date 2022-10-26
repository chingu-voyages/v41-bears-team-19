import './Register.css';
import FormPage from '../FormPage/FormPage';
import { Link } from 'react-router-dom';
import registerDecoration from '../../images/spiral-blue.png';

const Register = () => {
  const handleSubmit = () => {};

  return (
    <FormPage
      title="Register"
      decoration={registerDecoration}
      submitHandler={handleSubmit}
    >
      <>
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input type="email" name="email" className="form__input" required />
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          minLength={8}
          className="form__input"
          required
        />
        <label className="form__label" htmlFor="name">
          Name
        </label>
        <input
          name="name"
          minLength={2}
          maxLength={30}
          className="form__input"
          required
        />
        <label className="form__label" htmlFor="city">
          City
        </label>
        <input
          name="city"
          minLength={2}
          maxLength={30}
          className="form__input"
          required
        />

        <label className="form__label" htmlFor="phone">
          Phone
        </label>
        <input
          name="phone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className="form__input"
        />

        <input
          type="submit"
          value="Register"
          name="login"
          className="form__submit"
        />
        <p className="login__text">
          Already have an account?{' '}
          {
            <Link className="login__link" to="/login" relative="path">
              Login here.
            </Link>
          }
        </p>
      </>
    </FormPage>
  );
};

export default Register;
