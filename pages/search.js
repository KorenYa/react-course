import React from 'react';
import fetch from 'isomorphic-unfetch';
import configureStore from '../src/store';
import { StaticRouter } from 'react-router-dom';
import Root from '../src/Root';

const Search = props => {
    const store = configureStore(props.state);
    const context = {};
    return (
        <Root
            Router={StaticRouter}
            context={context}
            store={store}
            location={'/search/:browserSearchQuery'}
        />
    );
};

Search.getInitialProps = async function(context) {
    const { query } = context.query;
    const sortBy = 'release_date';
    const searchBy = 'title';

    const res = await fetch(
        'http://react-cdp-api.herokuapp.com/movies?sortBy=' +
            sortBy +
            '&sortOrder=desc' +
            '&search=' +
            query +
            '&searchBy=' +
            searchBy
    )
        .then(response => response.json())
        .then(response => {
            return response;
        });
    return {
        state: {
            moviesList: res,
            searchQuery: query,
            searchBy: searchBy,
            sortBy: sortBy,
            selectedMovie: {
                id: null,
                sameGenreMovies: {
                    data: [],
                    total: 0
                }
            }
        }
    };
};

export default Search;
