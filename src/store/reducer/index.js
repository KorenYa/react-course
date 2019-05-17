import { combineReducers } from 'redux';
import moviesList from './moviesList';
import searchQuery from './searchQuery';
import searchBy from './searchBy';
import sortBy from './sortBy';
import selectedMovie from './selectedMovie';

export default combineReducers({
  moviesList,
  searchQuery,
  searchBy,
  sortBy,
  selectedMovie,
});
