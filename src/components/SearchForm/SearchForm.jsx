import { useState } from 'react';
import css from './SearchForm.module.css';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const hanleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };
  return (
    <form className={css.form} onSubmit={hanleSubmit}>
      <label className={css.Label} htmlFor="search">
        Find movie by name
      </label>
      <input
        className={css.full}
        type="text"
        name="search"
        value={query}
        onChange={handleChange}
        placeholder="Search movie..."
        autoComplete="off"
      />
      <button className={css.add} type="submit">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
