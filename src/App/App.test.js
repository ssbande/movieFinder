import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setup = () => {
  return {
    props: {
      history: {
        push: jest.fn
      }
    }
  }
}

test('render App properly', () => {
  const { props } = setup();
  const wrapper = shallow(<App {...props} />);
  expect(wrapper).toMatchSnapshot();
})