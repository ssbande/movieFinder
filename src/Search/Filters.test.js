import React from 'react';
import { shallow } from 'enzyme';

import Filters from './Filters';

const setup = () => ({
  props: {
    filter: 'all',
    handleFilterChange: jest.fn(),
  }
})

describe('All Filter options for the app', () => {
  it('should show all filter options correctly', () => {
    const { props } = setup();
    const wrapper = shallow(<Filters {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
})