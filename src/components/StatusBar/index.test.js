import React from 'react';
import renderer from 'react-test-renderer';

import StatusBar from '../StatusBar';

describe('StatusBar', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <StatusBar
                    total={3}
                    sortBy={'release_date'}
                    handleSortBy={jest.fn()}
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
