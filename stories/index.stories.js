/*eslint-disable */
import React from 'react';
import jest from 'jest-mock';
window.jest = jest; //https://github.com/mthuret/storybook-addon-specifications/issues/78
import { storiesOf } from '@storybook/react';

import Button from '../src/components/Button'; //no curly braces because of https://stackoverflow.com/questions/34130539/uncaught-error-invariant-violation-element-type-is-invalid-expected-a-string
import Image from '../src/components/Image';
import Input from '../src/components/Input';
import NotFound from '../src/components/NotFound';
import Title from '../src/components/Title';

storiesOf('Button', module)
  .add('default', () => <Button type="button" text="click me" seachBy="genre" styleName="btn" />)
  .add('large', () => (
    <Button type="button" text="click me" seachBy="genre" styleName="btn btn-lg" />
  ))
  .add('back', () => (
    <Button type="button" text="click me" seachBy="genre" styleName="btn btn-back" />
  ));

storiesOf('Image', module).add('default', () => (
  <Image
    src="https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg"
    alt="default image"
  />
));

storiesOf('Input', module).add('default', () => <Input value="Type to search" />);

storiesOf('NotFound', module).add('default', () => <NotFound />);
/* eslint-enable */
