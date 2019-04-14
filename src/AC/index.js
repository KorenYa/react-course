import {
    SEARCH_MOVIES,
    SEARCH_QUERY,
    SEARCH_BY,
    SORT_BY
} from '../utils/constants';

export function startMoviesSearch() {
    return {
        type: SEARCH_MOVIES
    };
}

export function updateSearchQuery(searchQuery) {
    return {
        type: SEARCH_QUERY,
        searchQuery: searchQuery
    };
}

export function updateSearchBy(searchBy) {
    return {
        type: SEARCH_BY,
        searchBy: searchBy
    };
}

export function updateSortBy(sortBy) {
    return {
        type: SORT_BY,
        sortBy: sortBy
    };
}
