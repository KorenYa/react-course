import { SEARCH_MOVIES, CLEAR_MOVIES } from '../../utils/constants';

const defaultMoviesList = { total: 0, data: [] };

export default (moviesList = defaultMoviesList, action) => {
  const { type, response } = action;
  switch (type) {
    case SEARCH_MOVIES:
      return response || defaultMoviesList;

    case CLEAR_MOVIES:
      return defaultMoviesList;

    default:
      return moviesList;
  }
};
