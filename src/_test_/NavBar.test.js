import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


import {RouterComponent} from '../components/router';
import {NavBar} from '../components/navBar';

Enzyme.configure({ adapter: new Adapter() })


it('renders NavBar component', () => {
  const wrapper = shallow(<RouterComponent />);
  const content = <NavBar />;
  expect(wrapper.contains(content)).toEqual(true);
});
