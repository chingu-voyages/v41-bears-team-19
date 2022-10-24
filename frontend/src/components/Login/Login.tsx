import './Login.css';
import loginDecoration from '../../images/login-decoration.svg';
import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
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
        <label className="login__label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          minLength={8}
          className="login__input"
          value={email}
          onChange={handleChange}
          required
        />
        <label className="login__label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          minLength={8}
          className="login__input"
          value={password}
          onChange={handleChange}
          required
        />
        <p className="login__text">Forgot your password?</p>
        <input
          type="submit"
          value="Login"
          name="login"
          className="login__submit"
        />
        <p className="login__text">
          No account?{' '}
          {
            <Link className="login__link" to="register">
              Register now.{' '}
            </Link>
          }{' '}
        </p>
      </>
    </FormPage>
  );
};

export default Login;
