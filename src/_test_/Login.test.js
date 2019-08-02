import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import {Login} from '../components/login';

it('snapshot login', () => {

  const tree = renderer.create(<Login/>).toJSON()
  expect(tree).toMatchSnapshot();
})
