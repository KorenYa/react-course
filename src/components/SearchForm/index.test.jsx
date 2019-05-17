import React from 'react';
import renderer from 'react-test-renderer';

import SearchForm from '.';

describe('SearchForm', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SearchForm
          handleSubmit={jest.fn()}
          handleChange={jest.fn()}
          handleFilter={jest.fn()}
          inputValue="Narnia"
          searchBy="title"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
