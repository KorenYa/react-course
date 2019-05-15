import React from 'react';
import renderer from 'react-test-renderer';

import Button from '.';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Button
          type="button"
          text="click me"
          seachBy="genre"
          styleName="btn-lg"
          onClick={jest.fn()}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
