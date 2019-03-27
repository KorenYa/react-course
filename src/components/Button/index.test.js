import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';

describe('Button', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <Button
                    type='button'
                    text='click me'
                    seachBy='genre'
                    styleName='btn-lg'
                    onClick='handler'
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
