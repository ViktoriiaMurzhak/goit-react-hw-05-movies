import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import defaultImgCast from '../../img/petya.jpeg';
import css from './Cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    async function getData() {
      try {
        const data = await getMovieCast(id);
        setCast(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <ul className={css.PhotoList}>
      {cast?.map(item => (
        <li key={item.id}>
          <img
            className={css.Photo}
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                : defaultImgCast
            }
            alt=""
          />
          <h3 className={css.Name}>{item.original_name}</h3>
          <p className={css.Role}>{item.character}</p>
        </li>
      ))}
    </ul>
  );
};
