import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import reducer from './reducer';
import api from './middlewares/api';
import { initialState } from '../utils/constants';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const enhancer = applyMiddleware(api);
const store = createStore(persistedReducer, initialState, enhancer);

export default store;
