import React from 'react';
import renderer from 'react-test-renderer';

import Title from '../Title';

describe('Title', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Title title='Lorem ipsum' />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
