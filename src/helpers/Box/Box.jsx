import css from './Box.module.css';
import PropTypes from 'prop-types';

export const Box = ({ children }) => {
  return <div className={css.Box}>{children}</div>;
};

Box.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
};
