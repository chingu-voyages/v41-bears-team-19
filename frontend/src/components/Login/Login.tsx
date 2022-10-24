import './Login.css';
import loginDecoration from '../../images/login-decoration.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <div className="login__title-items">
        <h2 className="login__title">Login</h2>
        <img src={loginDecoration} alt="" className="login__title-decoration" />
      </div>
      <form onSubmit={handleSubmit} className="login__form">
        <label className="login__label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          minLength={8}
          className="login__input"
        />
        <label className="login__label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          minLength={8}
          className="login__input"
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
      </form>
    </div>
  );
};

export default Login;
