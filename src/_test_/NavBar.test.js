import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {RouterComponent} from '../components/router';
import {NavBar} from '../components/navBar';

import { MemoryRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() })

it('snapshot register', () => {

  const tree = renderer.create(
  <MemoryRouter>
  <NavBar/>
</MemoryRouter>
).toJSON()
  expect(tree).toMatchSnapshot();
})

it('renders NavBar component', () => {
  const wrapper = shallow(<RouterComponent />);
  const content = <NavBar />;
  expect(wrapper.contains(content)).toEqual(true);
});
