import css from './MovieItem.module.css';
import defaultImg from '../../img/default-movie.jpeg';

export const MovieItem = ({ url, title }) => {
  return (
    <li>
      <img
        className={css.Img}
        src={url ? `https://image.tmdb.org/t/p/w500${url}` : defaultImg}
        alt={title}
      />
      <h2 className={css.Label}>{title}</h2>
    </li>
  );
};
