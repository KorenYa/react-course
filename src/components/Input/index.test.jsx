import React from 'react';
import renderer from 'react-test-renderer';

import Input from '.';

describe('Input', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Input value="Type to search" onChange={jest.fn()} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
