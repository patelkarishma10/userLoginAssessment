import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {Register} from '../components/register';
import {RegisterResponse} from '../components/registerResponse';

Enzyme.configure({ adapter: new Adapter() })

it('snapshot register', () => {

  const tree = renderer.create(<Register/>).toJSON()
  expect(tree).toMatchSnapshot();
})

  it("render a prop to register", () => {
    const wrapper = shallow(<RegisterResponse responseData="[]" />);
    expect(wrapper.instance().props.responseData).toEqual("[]");
    expect(wrapper).toMatchSnapshot();
  });