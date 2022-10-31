import css from './Error.module.css';

export const Error = ({ text }) => {
  return (
    <>
      <h3 className={css.Error}>{text}</h3>
    </>
  );
};
