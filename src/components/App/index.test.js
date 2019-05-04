import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';

configure({ adapter: new Adapter() });

describe('App', () => {
    const location = {
        pathname: '*'
    };

    it('renders correctly', () => {
        const tree = renderer
            .create(
                <MemoryRouter>
                    <App
                        moviesList={{ total: 0 }}
                        searchQuery={'Adventure'}
                        searchBy={'title'}
                        sortBy={'release_date'}
                        location={location}
                    />
                </MemoryRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    const mockStartMoviesSearch = jest.fn();
    const mockUpdateSearchQuery = jest.fn();
    const mockUpdateSearchBy = jest.fn();
    const mockUpdateSortBy = jest.fn();
    const mockClearMoviesList = jest.fn();
    const event = {
        preventDefault: jest.fn(),
        target: {
            value: 'mock'
        }
    };

    const history = {
        push: jest.fn()
    };
    const wrapper = shallow(
        <App
            moviesList={{ total: 0 }}
            searchQuery={'Adventure'}
            searchBy={'title'}
            sortBy={'release_date'}
            startMoviesSearch={mockStartMoviesSearch}
            updateSearchQuery={mockUpdateSearchQuery}
            updateSearchBy={mockUpdateSearchBy}
            updateSortBy={mockUpdateSortBy}
            clearMoviesList={mockClearMoviesList}
            location={location}
            history={history}
        />
    );
    const instance = wrapper.instance();

    it('handleSubmit: should call mockStartMoviesSearch function', () => {
        instance.handleSubmit(event);
        expect(mockStartMoviesSearch.mock.calls.length).toBe(1);
    });

    it('handleChange: should call mockUpdateSearchQuery function', () => {
        instance.handleChange(event);
        expect(mockUpdateSearchQuery.mock.calls.length).toBe(1);
    });

    it('handleFilter: should call mockUpdateSearchBy function', () => {
        instance.handleFilter(event, 'mock');
        expect(mockUpdateSearchBy.mock.calls.length).toBe(1);
    });

    it('handleSortBy: should call mockUpdateSortBy && mockStartMoviesSearch functions', () => {
        instance.handleSortBy(event, 'mock');
        expect(mockUpdateSortBy.mock.calls.length).toBe(1);
        expect(mockStartMoviesSearch.mock.calls.length).toBe(2);
    });
});
