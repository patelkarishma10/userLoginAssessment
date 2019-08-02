import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {UserList} from '../components/userList';
import {User} from '../components/user';

Enzyme.configure({ adapter: new Adapter() })

it('snapshot user list', () => {

  const tree = renderer.create(<UserList passedFunction={"this.props.onLoad"} dataSent={[]} />).toJSON()

  expect(tree).toMatchSnapshot();
})

  it("render a prop to register", () => {
    const wrapper = shallow(<User username="user1" />);
    expect(wrapper.instance().props.username).toEqual("user1");
    expect(wrapper).toMatchSnapshot();
  });