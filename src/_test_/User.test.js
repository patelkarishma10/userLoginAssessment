import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import {User} from '../components/user';

it('snapshot user', () => {

  const tree = renderer.create(<User/>).toJSON()
  expect(tree).toMatchSnapshot();
})