import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import api from '../middlewares/api';
import { initialState } from '../utils/constants';

const enhancer = applyMiddleware(api);
const store = createStore(reducer, initialState, enhancer);

export default store;
