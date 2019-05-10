import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import api from './middlewares/api';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { initialStateDefault } from '../utils/constants';

export default initialStateArg => {
    const initialState = initialStateArg || initialStateDefault;
    const persistConfig = {
        key: 'root',
        storage
    };

    const persistedReducer = persistReducer(persistConfig, reducer);
    const enhancer = applyMiddleware(api);
    const store = createStore(persistedReducer, initialState, enhancer);
    return store;
};
