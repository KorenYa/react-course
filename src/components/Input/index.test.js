import React from 'react';
import renderer from 'react-test-renderer';

import Input from '../Input';

describe('Input', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Input value='Type to search' onChange='() => {}' />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
