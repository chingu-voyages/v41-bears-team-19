import './Login.css';
import loginDecoration from '../../images/login-decoration.svg';
import { ChangeEvent, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import FormPage from '../FormPage/FormPage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
    if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = () => {
    console.log({ email, password });
  };

  return (
    <FormPage
      title="Login"
      decoration={loginDecoration}
      submitHandler={handleSubmit}
    >
      <>
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          minLength={8}
          className="form__input"
          value={email}
          onChange={handleChange}
          required
        />
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          minLength={8}
          className="form__input"
          value={password}
          onChange={handleChange}
          required
        />
        <p className="login__text">Forgot your password?</p>
        <input
          type="submit"
          value="Login"
          name="login"
          className="form__submit"
        />
        <p className="login__text">
          No account?{' '}
          {
            <Link className="login__link" to="/register" relative="path">
              Register now.
            </Link>
          }
        </p>
      </>
    </FormPage>
  );
};

export default Login;
