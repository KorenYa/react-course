import React from 'react';
import renderer from 'react-test-renderer';

import SearchForm from '../SearchForm';

describe('SearchForm', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <SearchForm
                    handleSubmit='() => {}'
                    handleChange='() => {}'
                    handleFilter='() => {}'
                    inputValue='Narnia'
                    searchBy='title'
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
