import css from './MovieItem.module.css';
import defaultImg from '../../img/default-movie.jpeg';
import { Link } from 'react-router-dom';

export const MovieItem = ({ url, title, activeId, location }) => {
  return (
    <li>
      <Link to={`/movies/${activeId}`} state={{ from: location }}>
        <img
          className={css.Img}
          src={url ? `https://image.tmdb.org/t/p/w300${url}` : defaultImg}
          alt={title}
        />
        <h2 className={css.Label}>{title}</h2>
      </Link>
    </li>
  );
};
