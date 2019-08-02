import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import {UserList} from '../components/userList';

it('snapshot user list', () => {

  const tree = renderer.create(<UserList passedFunction={"this.props.onLoad"} dataSent={[]} />).toJSON()

  expect(tree).toMatchSnapshot();
})