import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import MovieCard from '.';

describe('MovieCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <MovieCard
            poster="poster.jpg"
            title="Movie"
            date="27-03-2019"
            genre="action"
          />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
