import React from 'react';
import renderer from 'react-test-renderer';

import Title from '.';

describe('Title', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Title title="Lorem ipsum" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
