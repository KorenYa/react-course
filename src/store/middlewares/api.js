import { SEARCH_MOVIES, GET_MOVIE_BY_ID } from '../../utils/constants';

export default store => next => action => {
    const { type, movieId } = action;
    const { searchQuery, searchBy, sortBy } = store.getState();

    switch (type) {
        case SEARCH_MOVIES:
            fetch(
                'http://react-cdp-api.herokuapp.com/movies?sortBy=' +
                    sortBy +
                    '&sortOrder=' +
                    'desc' +
                    '&search=' +
                    searchQuery +
                    '&searchBy=' +
                    searchBy
            )
                .then(response => response.json())
                .then(response => next({ ...action, response }));
            break;

        case GET_MOVIE_BY_ID:
            let combinedResponse;

            fetch('http://react-cdp-api.herokuapp.com/movies/' + movieId)
                .then(response => response.json())
                .then(response => {
                    combinedResponse = response;
                    return fetch(
                        'http://react-cdp-api.herokuapp.com/movies?search=' +
                            combinedResponse.genres[0].toLowerCase() +
                            '&searchBy=genres'
                    );
                })
                .then(response => response.json())
                .then(response => {
                    combinedResponse.sameGenreMovies = response;
                    return next({ ...action, combinedResponse });
                });

        default:
            next(action);
    }
};
