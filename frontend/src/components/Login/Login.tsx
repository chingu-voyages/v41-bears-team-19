import './Login.css';
import loginDecoration from '../../images/login-decoration.svg';
import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import FormPage from '../FormPage/FormPage';
import { SubmitHandler, useForm } from 'react-hook-form';

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: {
    email: '',
    password: ''
  }});

  return (
    <FormPage
      title="Login"
      decoration={loginDecoration}
      submitHandler={handleSubmit((data) => console.log(data))}
    >
      <>
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          {...register('email', {
            required: 'Email address is required',
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid Email address' },
          })}
          className="form__input"
        />

        <p className="form__error">{errors.email?.message}</p>

        <label className="form__label" htmlFor="password">
          Password
        </label>

        <input
          {...register('password', {
            required: 'Password cannot be empty',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
          className="form__input"
        />
         <p className="form__error">{errors.password?.message}</p>

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
