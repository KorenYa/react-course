export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SEARCH_QUERY = 'SEARCH_QUERY';
export const SEARCH_BY = 'SEARCH_BY';
export const SORT_BY = 'SORT_BY';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';
export const initialState = {
  moviesList: { total: 0, data: [] },
  searchQuery: 'Adventure',
  searchBy: 'title',
  sortBy: 'release_date',
  selectedMovie: {
    id: null,
    sameGenreMovies: {
      data: [],
      total: 0,
    },
  },
};
