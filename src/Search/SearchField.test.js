import React from 'react';
import { shallow } from 'enzyme';

import SearchField from './SearchField';

const setup = () => ({
  props: {
    query: 'searchString',
    handleChange: jest.fn(),
  }
})

describe('Input field for search bar', () => {
  it('should render correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<SearchField {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})