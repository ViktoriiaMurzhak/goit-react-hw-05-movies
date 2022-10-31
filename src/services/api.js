import axios from 'axios';

const API_KEY = 'ee23ab55503b4831e257c10a3a06bf9b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getHomeMovies() {
  const { data } = await axios.get(`/trending/movie/week`, {
    params: { api_key: API_KEY },
  });
  return data.results;
}

export async function getMovieByName(query, page) {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page,
      query,
    },
  });
  console.log('data.results', data);
  return data;
}
