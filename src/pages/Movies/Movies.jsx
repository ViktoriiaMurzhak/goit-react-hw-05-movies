import { SearchForm } from 'components/SearchForm';
import { SearchMovie } from 'components/SearchMovie';
import { Box } from 'helpers/Box/Box';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/api';

const Status = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const Movies = () => {
  // const [searchQuery, setSearchQuery] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.INIT);

  const page = searchParams.get('page') ?? 1;
  const search = searchParams.get('search') ?? '';

  // const params = useMemo(
  //   () => Object.fromEntries([...searchParams]),
  //   [searchParams]
  // );

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getMovieByName(search, page);
        setMovies(data);
        setStatus(Status.SUCCESS);
      } catch (error) {
        setStatus(Status.ERROR);
        console.log(error.message);
      }
    };
    if (search) {
      getData();
    } else {
      setMovies([]);
    }

    // if (search) {
    //   setStatus(Status.LOADING);
    //   getMovieByName(search, page)
    //     .then(data => {
    //       setStatus(Status.SUCCESS);
    //       setMovies(data);
    //     })
    //     .catch(() => {
    //       setStatus(Status.ERROR);
    //       console.log('error');
    //     });
    // }
  }, [search, page]);

  const handleUpdateSearch = value => {
    setSearchParams({ search: value, page: 1 });
  };

  // const handleChangePage = newPage => {
  //   setSearchParams({ ...params, page: newPage });
  // };

  // const handleSubmit = searchQuery => {
  //   setSearchQuery(searchQuery);
  // };

  return (
    <Box>
      <SearchForm onSubmit={handleUpdateSearch} />
      <SearchMovie
        // handleChangePage={handleChangePage}
        value={search}
        movies={movies}
        status={status}
      />
    </Box>
  );

  // return (
  //   <Box>
  //     <SearchForm onSubmit={handleSubmit} />
  //     <SearchMovie value={searchQuery} />
  //   </Box>
  // );
};
