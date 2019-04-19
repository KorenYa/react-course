import { combineReducers } from 'redux';
import moviesList from './moviesList';
import searchQuery from './searchQuery';
import searchBy from './searchBy';
import sortBy from './sortBy';

export default combineReducers({
    moviesList,
    searchQuery,
    searchBy,
    sortBy
});
