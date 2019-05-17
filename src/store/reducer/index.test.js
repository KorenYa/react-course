import * as types from '../../utils/constants';
import reducer from '.';

describe('Movies reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(types.initialState);
  });

  it('should handle SEARCH_MOVIES', () => {
    expect(
      reducer(
        {},
        {
          type: types.SEARCH_MOVIES,
          response: { total: 3 },
        },
      ),
    ).toEqual({
      ...types.initialState,
      moviesList: { total: 3 },
    });
  });

  it('should handle SEARCH_QUERY', () => {
    expect(
      reducer(
        {},
        {
          type: types.SEARCH_QUERY,
          searchQuery: 'Narnia',
        },
      ),
    ).toEqual({
      ...types.initialState,
      searchQuery: 'Narnia',
    });
  });

  it('should handle SEARCH_BY', () => {
    expect(
      reducer(
        {},
        {
          type: types.SEARCH_BY,
          searchBy: 'genre',
        },
      ),
    ).toEqual({
      ...types.initialState,
      searchBy: 'genre',
    });
  });

  it('should handle SORT_BY', () => {
    expect(
      reducer(
        {},
        {
          type: types.SORT_BY,
          sortBy: 'vote_count',
        },
      ),
    ).toEqual({
      ...types.initialState,
      sortBy: 'vote_count',
    });
  });
});
