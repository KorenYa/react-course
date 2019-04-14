import { SEARCH_MOVIES } from '../utils/constants';

export default store => next => action => {
    const { type } = action;
    const { searchQuery, searchBy, sortBy } = store.getState();

    switch (type) {
        case SEARCH_MOVIES:
            fetch(
                'http://react-cdp-api.herokuapp.com/movies?search=' +
                    searchQuery +
                    '&searchBy=' +
                    searchBy +
                    '&sortBy=' +
                    sortBy
            )
                .then(response => response.json())
                .then(response => next({ ...action, response }));
            break;

        default:
            next(action);
    }
};
