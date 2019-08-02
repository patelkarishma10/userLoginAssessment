import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


import {RouterComponent} from '../components/router';
import {NavBar} from '../components/navBar';
import { Login } from '../components/login';
import { UserList } from '../components/userList';
import { Register } from '../components/register';

Enzyme.configure({ adapter: new Adapter() })

it('snapshot router', () => {

  const tree = renderer.create(<RouterComponent/>).toJSON()
  expect(tree).toMatchSnapshot();
})

it("render a prop to login", () => {
    const wrapper = shallow(<Login passedFunction="[]" />);
    expect(wrapper.instance().props.passedFunction).toEqual("[]");
    expect(wrapper).toMatchSnapshot();
  });


  it("render a prop to register", () => {
    const wrapper = shallow(<Register passedFunction="[]" />);
    expect(wrapper.instance().props.passedFunction).toEqual("[]");
    expect(wrapper).toMatchSnapshot();
  });
  
      it("render a prop", () => {
    const wrapper = shallow(<UserList dataSent={[{username: ""}, {username: "test"}]} />);
    expect(wrapper.instance().props.dataSent).toEqual([{username: ""}, {username: "test"}]);
    expect(wrapper).toMatchSnapshot();
  });
