import * as types from '../../utils/constants';
import reducer from '../reducer';
import { initialState } from '../../utils/constants';

describe('Movies reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SEARCH_MOVIES', () => {
        expect(
            reducer(
                {},
                {
                    type: types.SEARCH_MOVIES,
                    response: { total: 3 }
                }
            )
        ).toEqual({
            ...initialState,
            moviesList: { total: 3 }
        });
    });

    it('should handle SEARCH_QUERY', () => {
        expect(
            reducer(
                {},
                {
                    type: types.SEARCH_QUERY,
                    searchQuery: 'Narnia'
                }
            )
        ).toEqual({
            ...initialState,
            searchQuery: 'Narnia'
        });
    });

    it('should handle SEARCH_BY', () => {
        expect(
            reducer(
                {},
                {
                    type: types.SEARCH_BY,
                    searchBy: 'genre'
                }
            )
        ).toEqual({
            ...initialState,
            searchBy: 'genre'
        });
    });

    it('should handle SORT_BY', () => {
        expect(
            reducer(
                {},
                {
                    type: types.SORT_BY,
                    sortBy: 'vote_count'
                }
            )
        ).toEqual({
            ...initialState,
            sortBy: 'vote_count'
        });
    });
});
