import './Register.css';
import FormPage from '../FormPage/FormPage';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import registerDecoration from '../../images/spiral-blue.png';

interface RegisterData {
  email: string;
  password: string;
  name: string;
  city: string;
  phone: string;
  userType: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues: {
      userType: 'individual',
      email: '',
      password: '',
      name: '',
      city: '',
      phone: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        email: '',
        password: '',
        name: '',
        city: '',
        phone: '',
        userType: 'individual',
      });
    }
  }, [formState, reset]);

  const submitRegisterData = (data: RegisterData) => {
    console.log(data);
  };

  return (
    <FormPage
      title="Register"
      decoration={registerDecoration}
      submitHandler={handleSubmit(submitRegisterData)}
    >
      <>
        <p className="form__label">User Type</p>
        <div className="form__radio-buttons">
          <div>
            <input
              {...register('userType')}
              type="radio"
              value="individual"
              defaultChecked
            />
            <label
              className="form__label form__label_radio"
              htmlFor="individual"
              defaultChecked
            >
              Individual
            </label>
          </div>
          <div>
            <input {...register('userType')} type="radio" value="shelter" />
            <label className="form__label form__label_radio" htmlFor="shelter">
              Shelter
            </label>
          </div>
        </div>

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

        <label className="form__label" htmlFor="name">
          Name
        </label>

        <input
          {...register('name', {
            required: 'Name cannot be empty',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters',
            },
            maxLength: 30,
          })}
          className="form__input"
        />

        <p className="form__error">{errors.name?.message}</p>

        <label className="form__label" htmlFor="city">
          City
        </label>
        <input
          {...register('city', {
            required: 'City cannot be empty',
            minLength: {
              value: 2,
              message: 'City must be at least 2 characters',
            },
            maxLength: 40,
          })}
          className="form__input"
        />

        <p className="form__error">{errors.city?.message}</p>

        <label className="form__label" htmlFor="phone">
          Phone
        </label>

        <input
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /[0-9]{3}-?[0-9]{3}-?[0-9]{4}/,
              message: 'Invalid phone number',
            },
          })}
          className="form__input"
        />

        <p className="form__error">{errors.phone?.message}</p>

        <input
          type="submit"
          value="Register"
          name="register"
          className={`form__submit ${!isValid ? 'form__submit_disabled' : ''}`}
          disabled={!isDirty && !isValid}
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
