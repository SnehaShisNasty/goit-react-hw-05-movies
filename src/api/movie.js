import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E0Y2E0MDFjZjUzYzEzYzA4MDBhNzMyZjZhMGE1MSIsInN1YiI6IjY1YjQwNmU2ZDIzNmU2MDE0OWMwMGYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nq2jMd6hIdv7fjxdz21OXbcbZk7RUYyfP5JVR90HZ60',
  },
};

const getAllMovies = () => {
  return instance.get('/trending/all/day', options);
};
const optionsId = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/572802',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E0Y2E0MDFjZjUzYzEzYzA4MDBhNzMyZjZhMGE1MSIsInN1YiI6IjY1YjQwNmU2ZDIzNmU2MDE0OWMwMGYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nq2jMd6hIdv7fjxdz21OXbcbZk7RUYyfP5JVR90HZ60',
  },
};

const getMovieById = id => {
  optionsId.url = `https://api.themoviedb.org/3/movie/${id}`;

  return axios.request(optionsId);
};

const optionsForSearch = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: { query: 'a', include_adult: 'false', language: 'en-US', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E0Y2E0MDFjZjUzYzEzYzA4MDBhNzMyZjZhMGE1MSIsInN1YiI6IjY1YjQwNmU2ZDIzNmU2MDE0OWMwMGYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nq2jMd6hIdv7fjxdz21OXbcbZk7RUYyfP5JVR90HZ60',
  },
};
const getMovieBySearch = (text, page) => {
  optionsForSearch.params.query = text;
  optionsForSearch.params.page = page;
  console.log(optionsForSearch);
  return axios.request(optionsForSearch);
};

const optionsForCast = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/933131/credits',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E0Y2E0MDFjZjUzYzEzYzA4MDBhNzMyZjZhMGE1MSIsInN1YiI6IjY1YjQwNmU2ZDIzNmU2MDE0OWMwMGYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nq2jMd6hIdv7fjxdz21OXbcbZk7RUYyfP5JVR90HZ60',
  },
};

const getMovieByCast = id => {
  optionsForCast.url = `https://api.themoviedb.org/3/movie/${id}/credits`;

  return axios.request(optionsForCast);
};

const optionsForReviews = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/933131/reviews',
  params: { language: 'en-US', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2E0Y2E0MDFjZjUzYzEzYzA4MDBhNzMyZjZhMGE1MSIsInN1YiI6IjY1YjQwNmU2ZDIzNmU2MDE0OWMwMGYxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nq2jMd6hIdv7fjxdz21OXbcbZk7RUYyfP5JVR90HZ60',
  },
};
const getMovieByReviews = id => {
  optionsForReviews.url = `https://api.themoviedb.org/3/movie/${id}/reviews`;

  return axios.request(optionsForReviews);
};

export {
  getAllMovies,
  getMovieById,
  getMovieBySearch,
  getMovieByCast,
  getMovieByReviews,
};
