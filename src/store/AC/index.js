import {
    SEARCH_MOVIES,
    SEARCH_QUERY,
    SEARCH_BY,
    SORT_BY,
    CLEAR_MOVIES,
    GET_MOVIE_BY_ID
} from '../../utils/constants';

export function startMoviesSearch() {
    return {
        type: SEARCH_MOVIES
    };
}

export function updateSearchQuery(searchQuery) {
    return {
        type: SEARCH_QUERY,
        searchQuery
    };
}

export function updateSearchBy(searchBy) {
    return {
        type: SEARCH_BY,
        searchBy
    };
}

export function updateSortBy(sortBy) {
    return {
        type: SORT_BY,
        sortBy
    };
}

export function clearMoviesList() {
    return {
        type: CLEAR_MOVIES
    };
}

export function getMovieById(movieId) {
    return {
        type: GET_MOVIE_BY_ID,
        movieId
    };
}
