import { useState } from 'react';
import css from './SearchForm.module.css';

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
      <label className={css.label}>
        Find movie by name
        <input
          className={css.full}
          type="text"
          name="filter"
          value={query}
          onChange={handleChange}
          placeholder="Search movie"
        />
      </label>
      <button className={css.add} type="submit">
        Search
      </button>
    </form>
  );
};

// export const SearchForm = ({ filter, handleFilter }) => {
//   return (
//     <label className={css.label}>
//       Find contacts by name
//       <input
//         className={css.full}
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={handleFilter}
//       />
//     </label>
//   );
// };
