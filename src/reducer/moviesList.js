import { SEARCH_MOVIES } from '../utils/constants';

const defaultMoviesList = { total: 0 };

export default (moviesList = defaultMoviesList, action) => {
    const { type, response } = action;

    switch (type) {
        case SEARCH_MOVIES:
            return response ? response : defaultMoviesList;
    }

    return moviesList;
};
