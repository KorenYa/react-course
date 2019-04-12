import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetails from '../MovieDetails';

describe('MovieDetails', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <MovieDetails
                    movie={{
                        poster_path:
                            'https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg',
                        title: 'The Gold Rush',
                        tagline: "The World's Greatest Laughing Picture!",
                        release_date: '1925-06-25',
                        runtime: 95,
                        overview:
                            'A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.'
                    }}
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
