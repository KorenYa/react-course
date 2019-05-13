import React from 'react';
import fetch from 'isomorphic-unfetch';
import configureStore from '../src/store';
import { StaticRouter } from 'react-router-dom';
import Root from '../src/Root';

const Film = props => {
    const store = configureStore(props.state);
    const context = {};
    return (
        <Root
            context={context}
            Router={StaticRouter}
            location={'/film/:filmId'}
            store={store}
        />
    );
};

Film.getInitialProps = async function(context) {
    const { id } = context.query;
    let combinedResponse;

    const res = await fetch('http://react-cdp-api.herokuapp.com/movies/' + id)
        .then(response => response.json())
        .then(response => {
            combinedResponse = response;
            return fetch(
                'http://react-cdp-api.herokuapp.com/movies?search=' +
                    combinedResponse.genres[0].toLowerCase() +
                    '&searchBy=genres'
            );
        })
        .then(response => response.json())
        .then(response => {
            combinedResponse.sameGenreMovies = response;
            return combinedResponse;
        });

    return {
        state: {
            moviesList: { total: 0, data: [] },
            searchQuery: 'Narnia',
            searchBy: 'title',
            sortBy: 'release_date',
            selectedMovie: res
        }
    };
};

export default Film;
