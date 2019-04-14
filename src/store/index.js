import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import api from '../middlewares/api';

const enhancer = applyMiddleware(api);
const initialState = {
    moviesList: { total: 0 },
    searchQuery: 'Adventure',
    searchBy: 'title',
    sortBy: 'release_date'
};
const store = createStore(reducer, initialState, enhancer);

export default store;
