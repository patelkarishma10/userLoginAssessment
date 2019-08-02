import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import {RegisterResponse} from '../components/registerResponse';

it('snapshot register response', () => {

  const tree = renderer.create(<RegisterResponse responseData={{username: "", email: "", password: "", password2: ""}}/>).toJSON()
  expect(tree).toMatchSnapshot();
})