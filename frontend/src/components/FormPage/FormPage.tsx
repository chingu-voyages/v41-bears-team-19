import './FormPage.css';
import { FormEvent, ReactElement } from 'react';
import { totalmem } from 'os';

interface FormPageProps {
  title: string;
  decoration: string;
  children: ReactElement;
  submitHandler: Function;
}

const FormPage = ({
  title,
  decoration,
  children,
  submitHandler,
}: FormPageProps) => {


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submitHandler();
  };

  return (
    <div className="form-page">
      <div className="form-page__text">
        <h2 className="form-page__title">{title}</h2>
        <img
          src={decoration}
          alt="Decorative squiggle"
          className={`form-page__decoration ${title === "Register"? 'form-page__decoration_register': ''}`}
        />
      </div>
      <form onSubmit={handleSubmit} className="form-page__form">
        {children}
      </form>
    </div>
  );
};

export default FormPage;
