import { createSelector } from 'reselect';

export const getMoviesList = createSelector(state => state.moviesList, moviesList => moviesList);
export const getSearchQuery = createSelector(state => state.searchQuery,
  searchQuery => searchQuery);
export const getSearchBy = createSelector(state => state.searchBy, searchBy => searchBy);
export const getSortBy = createSelector(state => state.sortBy, sortBy => sortBy);
