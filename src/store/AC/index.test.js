import * as types from '../../utils/constants';
import * as actions from '../AC';

describe('actions', () => {
    it('should create an action to search movies', () => {
        const expectedAction = {
            type: types.SEARCH_MOVIES
        };
        expect(actions.startMoviesSearch()).toEqual(expectedAction);
    });

    it('should create an action to update search query', () => {
        const searchQuery = 'Narnia';
        const expectedAction = {
            type: types.SEARCH_QUERY,
            searchQuery
        };
        expect(actions.updateSearchQuery(searchQuery)).toEqual(expectedAction);
    });

    it('should create an action to update search by field', () => {
        const searchBy = 'genre';
        const expectedAction = {
            type: types.SEARCH_BY,
            searchBy
        };
        expect(actions.updateSearchBy(searchBy)).toEqual(expectedAction);
    });

    it('should create an action to update sort by field', () => {
        const sortBy = 'vote_count';
        const expectedAction = {
            type: types.SORT_BY,
            sortBy
        };
        expect(actions.updateSortBy(sortBy)).toEqual(expectedAction);
    });
});
