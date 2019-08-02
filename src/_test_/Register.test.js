import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import {Register} from '../components/register';

it('snapshot register', () => {

  const tree = renderer.create(<Register/>).toJSON()
  expect(tree).toMatchSnapshot();
})