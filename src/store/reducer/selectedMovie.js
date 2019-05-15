import { GET_MOVIE_BY_ID } from '../../utils/constants';

const defaultSelectedMovie = {
  id: null,
  sameGenreMovies: { total: 0, data: [] },
};

export default (selectedMovie = defaultSelectedMovie, action) => {
  const { type, combinedResponse } = action;
  switch (type) {
    case GET_MOVIE_BY_ID:
      return combinedResponse || defaultSelectedMovie;

    default:
      return selectedMovie;
  }
};
