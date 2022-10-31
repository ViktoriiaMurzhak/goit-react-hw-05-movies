import css from './Box.module.css';

export const Box = ({ children }) => {
  return <div className={css.Box}>{children}</div>;
};
