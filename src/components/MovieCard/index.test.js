import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from '../MovieCard';

describe('MovieCard', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <MovieCard
                    poster='poster.jpg'
                    title='Movie'
                    date='27-03-2019'
                    genre='action'
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
