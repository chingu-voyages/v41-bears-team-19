import './Login.css';
import loginDecoration from '../../images/login-decoration.svg';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormPage from '../FormPage/FormPage';
import { useForm } from 'react-hook-form';

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '', password: '' });
    }
  }, [formState, reset]);

  const submitLoginData = (data: LoginData) => {
    console.log(data);
  };

  return (
    <FormPage
      title="Login"
      decoration={loginDecoration}
      submitHandler={handleSubmit(submitLoginData)}
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
          type="password"
        />
        <p className="form__error">{errors.password?.message}</p>

        <p className="login__text">Forgot your password?</p>
        <input
          type="submit"
          value="Login"
          name="login"
          className={`form__submit ${!isValid ? 'form__submit_disabled' : ''}`}
          disabled={!isDirty && !isValid}
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
